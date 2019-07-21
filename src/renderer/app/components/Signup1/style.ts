import styled, { css } from 'styled-components';
import { Section } from '../Overlay/style';
import { centerIcon } from '~/shared/mixins';
import { icons } from '../../constants';
import { Theme } from '../../models/theme';
import { platform } from 'os';
import { transparency } from '~/renderer/constants';

export const BookmarkSection = styled(Section)`
  padding: 8px 0px;
  margin-top: 48px;
`;

export const Sections = styled.div`
  margin-left: 300px;
  width: calc(100% - 300px);
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  margin-top: ${platform() === 'darwin' ? 48 : 32}px;
  margin-left: 32px;
  align-items: center;
`;

export const Close = styled.div`
  ${centerIcon()};
  background-image: url(${icons.close});
  height: 24px;
  width: 24px;
  opacity: 0.54;
  margin-right: 24px;

  ${({ theme }: { theme?: Theme }) => css`
    filter: ${theme['overlay.foreground'] === 'light'
      ? 'invert(100%)'
      : 'none'};
  `}

  &:hover {
    opacity: 1;
  }
`;

export const SignupContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 50px;
  align-items: center;
`;

export const InsideContainer = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  flex-flow: column;
  margin: auto;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: none;
  outline: none;

  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  background-color: transparent;
  height: 100%;
  font-size: 14px;

  ${({ theme }: { theme?: Theme }) => css`
    color: ${theme['overlay.foreground'] === 'light'
      ? 'white'
      : `rgba(0, 0, 0, ${transparency.text.high})`};

    &::placeholder {
      color: ${theme['overlay.foreground'] === 'light'
        ? 'rgba(255, 255, 255, 0.54)'
        : `rgba(0, 0, 0, ${transparency.text.medium})`};
    }
  `}
`;

export const InputContainer = styled.div`
  margin-top: 24px;
  height: 42px;
  border-radius: 30px;

  position: relative;

  ${({ theme }: { theme?: Theme }) => css`
    background-color: ${theme['overlay.foreground'] === 'light'
      ? 'rgba(255, 255, 255, 0.12)'
      : 'rgba(0, 0, 0, 0.04)'};
  `}
  }
`;
