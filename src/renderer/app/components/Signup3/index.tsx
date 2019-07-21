import * as React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';
import { Container } from '../Overlay/style';
import { preventHiding } from '../Overlay';
import { Back, Header, Title, SignupContainer, InsideContainer, Statement } from './style'
import { RoundBtn } from '../RoundBtn'

const onBack = () => {
  store.overlay.currentContent = 'signup2';
};

const onSignin = () => {
  store.overlay.currentContent = 'default';
};

export const Signup3 = observer(() => {

  return (
    <Container
      onClick={preventHiding}
      right
      visible={
        store.overlay.currentContent === 'signup3' && store.overlay.visible
      }
    >
      <Header>
        <Back onClick={onBack}></Back>
      </Header>
      <SignupContainer>
        <InsideContainer>
          <Title>EU Consent</Title>
          <Statement>
            
          </Statement>
          <div>
            <input type="checkbox" onInput={store.signup.onIagreeInput} /> <span>I agree</span>
            <RoundBtn onClick={onSignin} enabled={store.signup.iagree} >Sign in</RoundBtn>
          </div>
        </InsideContainer>
      </SignupContainer>
    </Container>
  );
});
