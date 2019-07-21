import { observer } from 'mobx-react';
import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { SearchBox } from '../SearchBox';
import { Style } from '~/renderer/app/style';
import { Toolbar } from '../Toolbar';
import { ipcRenderer } from 'electron';
import { StyledApp } from './style';
import { WindowsButtons } from '../WindowsButtons';
import { platform } from 'os';
import { Overlay } from '../Overlay';
import store from '../../store';

const GlobalStyle = createGlobalStyle`${Style}`;

window.onbeforeunload = () => {
  ipcRenderer.send('browserview-clear');
};

export const App = observer(() => {
  return (
    <ThemeProvider theme={store.theme}>
      <StyledApp>
        <GlobalStyle />
        <Toolbar />
        <SearchBox />
        <Overlay />
        {platform() !== 'darwin' && <WindowsButtons />}
      </StyledApp>
    </ThemeProvider>
  );
});
