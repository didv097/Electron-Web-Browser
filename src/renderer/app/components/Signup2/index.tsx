import * as React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';
import { Container } from '../Overlay/style';
import { preventHiding } from '../Overlay';
import { Back, Header, Title, SignupContainer, InsideContainer, InputContainer, Input } from './style'
import { RoundBtn } from '../RoundBtn'

const onBack = () => {
  store.overlay.currentContent = 'signup1';
};

const onNext = () => {
  store.overlay.currentContent = 'signup3';
};

export const Signup2 = observer(() => {

  return (
    <Container
      onClick={preventHiding}
      right
      visible={
        store.overlay.currentContent === 'signup2' && store.overlay.visible
      }
    >
      <Header>
        <Back onClick={onBack}></Back>
      </Header>
      <SignupContainer>
        <InsideContainer>
          <Title>Welcome!</Title>
          <InputContainer>
            <Input type="password" placeholder="Password" onInput={store.signup.onPasswordInput} />
          </InputContainer>
          <InputContainer>
            <Input type="password" placeholder="Confirm Password" onInput={store.signup.onPasswordConfirmInput} />
          </InputContainer>
          <RoundBtn onClick={onNext} enabled={store.signup.enabled2} >Next</RoundBtn>
        </InsideContainer>
      </SignupContainer>
    </Container>
  );
});
