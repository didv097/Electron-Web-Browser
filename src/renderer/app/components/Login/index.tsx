import * as React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';
import { Container } from '../Overlay/style';
import { preventHiding } from '../Overlay';
import { Close, Header, Title, LoginContainer, InsideContainer, InputContainer, Input, Link } from './style'
import { RoundBtn } from '../RoundBtn';

const onClose = () => {
  store.overlay.currentContent = 'default';
};

const onLogin = () => {
/*
  var https = require('https');
  var options = {
    'method': 'POST',
    'hostname': '{{url}}',
    'path': '/{{version}}/identity/accounts/login',
    'headers': {
    }
  };
  var req = https.request(options, function (res) {
    var chunks = [];
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });
    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
    res.on("error", function (error) {
      console.error(error);
    });
  });
  var postData =  "{\r\n  \"usernameOrEmail\": \"string\",\r\n  \"password\": \"string\"\r\n}";
  req.write(postData);
  req.end();
*/
  onClose();
};

export const Login = observer(() => {

  return (
    <Container
      onClick={preventHiding}
      right
      visible={
        store.overlay.currentContent === 'login' && store.overlay.visible
      }
    >
      <Header>
        <Close onClick={onClose}></Close>
      </Header>
      <LoginContainer>
        <InsideContainer>
          <Title>Welcome back!</Title>
          <InputContainer>
            <Input placeholder="Email" onInput={store.login.onEmailInput} />
          </InputContainer>
          <InputContainer>
            <Input type="password" placeholder="Password" onInput={store.login.onPasswordInput} />
          </InputContainer>
          <Link>Forgot password?</Link>
          <RoundBtn onClick={onLogin} enabled={store.login.enabled} >Next</RoundBtn>
        </InsideContainer>
      </LoginContainer>
    </Container>
  );
});
