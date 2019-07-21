import * as React from 'react';
import { observer } from 'mobx-react';

import { StyledUserAccess, LoginBtn, SignupBtn } from './style';
import { Section } from '../Overlay/style';
import { preventHiding } from '../Overlay';
import store from '../../store';

const onLogin = () => {
  store.overlay.currentContent = 'login';
};

const onSignup = () => {
  store.overlay.currentContent = 'signup1';
};

export const UserAccess = observer(() => {
  return (
    <Section onClick={preventHiding}>
      <StyledUserAccess>
        <LoginBtn onClick={onLogin}>Log in</LoginBtn>
        <SignupBtn onClick={onSignup}>Sign up</SignupBtn>
      </StyledUserAccess>
    </Section>
  );
});
