import * as React from 'react';
import { observer } from 'mobx-react';
import { Section, Actions } from '../Overlay/style';
import { preventHiding, Header } from '../Overlay';
import { Bubble } from '../Bubble';
import { icons } from '../../constants';
import store from '../../store';
import { Line } from './style';
import { darkTheme, lightTheme } from '~/renderer/constants/themes';
import { getCurrentWindow } from '../../utils';
import { ipcRenderer } from 'electron';

const changeContent = (content: 'default' | 'history' | 'bookmarks' | 'settings' | 'login' | 'signup1' | 'signup2' | 'signup3') => () => {
  store.overlay.currentContent = content;
};

const onFindClick = () => {
  store.overlay.findVisible = !store.overlay.findVisible;
};

const onDarkClick = () => {
  store.settings.isDarkTheme = !store.settings.isDarkTheme;
  store.theme = store.settings.isDarkTheme ? darkTheme : lightTheme;
  store.saveSettings();
};

const onShieldClick = () => {
  store.settings.isShieldToggled = !store.settings.isShieldToggled;
  store.saveSettings();
  ipcRenderer.send('shield-toggle', store.settings.isShieldToggled);
};

const onAlwaysClick = () => {
  store.isAlwaysOnTop = !store.isAlwaysOnTop;
  getCurrentWindow().setAlwaysOnTop(store.isAlwaysOnTop);
};

export const QuickMenu = observer(() => {
  const invert = store.theme['overlay.foreground'] === 'light';
  return (
    <Section
      onClick={preventHiding}
      style={{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        padding: 16,
      }}
    >
      <Actions>
        <Bubble
          toggled={store.isAlwaysOnTop}
          onClick={onAlwaysClick}
          invert={invert}
          icon={icons.window}
        >
          Always on top
        </Bubble>
        <Bubble
          toggled={store.settings.isDarkTheme}
          onClick={onDarkClick}
          invert={invert}
          icon={icons.night}
        >
          Dark mode
        </Bubble>
        <Bubble
          toggled={store.settings.isShieldToggled}
          invert={invert}
          icon={icons.shield}
          onClick={onShieldClick}
        >
          Shield
        </Bubble>
      </Actions>
      <Line />
      <Actions>
        <Bubble
          onClick={changeContent('history')}
          invert={invert}
          icon={icons.history}
        >
          History
        </Bubble>
        <Bubble
          onClick={changeContent('bookmarks')}
          invert={invert}
          icon={icons.bookmarks}
        >
          Bookmarks
        </Bubble>
        <Bubble
          onClick={changeContent('settings')}
          invert={invert}
          icon={icons.settings}>
          Settings
        </Bubble>
        <Bubble disabled invert={invert} icon={icons.extensions}>
          Extensions
        </Bubble>
        <Bubble
          toggled={store.overlay.findVisible}
          invert={invert}
          icon={icons.find}
          onClick={onFindClick}
        >
          Find
        </Bubble>
      </Actions>
    </Section>
  );
});
