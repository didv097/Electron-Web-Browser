import { observer } from 'mobx-react';
import * as React from 'react';

import store from '../../store';
import {
  StyledOverlay,
  HeaderText,
  HeaderArrow,
  Scrollable,
  Title,
  Content,
  Container,
  Handle,
} from './style';
import { UserAccess } from '../UserAccess';
import { History } from '../History';
import { Bookmarks } from '../Bookmarks';
import { Settings } from '../Settings';
import { Dial } from '../Dial';
import { QuickMenu } from '../QuickMenu';
import { DownloadsSection } from '../DownloadsSection';
import { Login } from '../Login'
import { Signup1 } from '../Signup1'
import { Signup2 } from '../Signup2'
import { Signup3 } from '../Signup3'

export const Header = ({ children, clickable }: any) => {
  return (
    <HeaderText clickable={clickable}>
      {children}
      {clickable && <HeaderArrow />}
    </HeaderText>
  );
};

const onClick = () => {
  store.suggestions.list = []
  store.overlay.dialTypeMenuVisible = false;
};

export const preventHiding = (e: any) => {
  e.stopPropagation();
  store.overlay.dialTypeMenuVisible = false;
};

export const Overlay = observer(() => {
  return (
    <StyledOverlay visible={store.overlay.visible} onClick={onClick}>
      <Handle visible={store.overlay.visible} />
      <Container
        visible={
          store.overlay.currentContent === 'default' && store.overlay.visible
        }
      >
        <Scrollable ref={store.overlay.scrollRef}>
          <Content>
            <Dial />

            <Title>User Access</Title>
            <UserAccess />
            {store.downloads.list.length > 0 && <DownloadsSection />}
            <QuickMenu />
          </Content>
        </Scrollable>
      </Container>
      <History />
      <Bookmarks />
      <Settings />
      <Login />
      <Signup1 />
      <Signup2 />
      <Signup3 />
    </StyledOverlay>
  );
});
