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

export const Back = styled.div`
  ${centerIcon()};
  background-image: url(${icons.back});
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
  margin-bottom: 50px;
`;

export const Statement = styled.div`
  margin-bottom: 100px;
`;