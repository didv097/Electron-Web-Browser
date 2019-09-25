import * as React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';
import { Container } from '../Overlay/style';
import { preventHiding } from '../Overlay';
import { Close, Header, Title, SignupContainer, InsideContainer, InputContainer, Input } from './style'
import { RoundBtn } from '../RoundBtn'

const onClose = () => {
  store.overlay.currentContent = 'default';
};

const onNext = () => {
  store.overlay.currentContent = 'signup2';
}

export const Signup1 = observer(() => {

  return (
    <Container
      onClick={preventHiding}
      right
      visible={
        store.overlay.currentContent === 'signup1' && store.overlay.visible
      }
    >
      <Header>
        <Close onClick={onClose}></Close>
      </Header>
      <SignupContainer>
        <InsideContainer>
          <Title>Welcome!</Title>
          <InputContainer>
            <Input placeholder="Email " onInput={store.signup.onEmailInput} />
          </InputContainer>
          <InputContainer>
            <Input placeholder="Profile name" onInput={store.signup.onNameInput} />
          </InputContainer>
          <RoundBtn onClick={onNext} enabled={store.signup.enabled1} >Next</RoundBtn>
        </InsideContainer>
      </SignupContainer>
    </Container>
  );
});
