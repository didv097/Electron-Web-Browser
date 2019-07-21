import styled, { css } from 'styled-components';
import { icons } from '../../constants';
import { centerIcon } from '~/shared/mixins';

import { Theme } from '../../models/theme';

export const StyledUserAccess = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const AddTabGroup = styled.div`
  width: 42px;
  height: 42px;
  border: 1px solid black;
  opacity: 0.54;
  border-radius: 50px;
  ${centerIcon(24)};
  background-image: url(${icons.add});
  transition: 0.1s opacity;
  margin-bottom: 8px;

  &:hover {
    opacity: 1;
  }

  ${({ theme }: { theme?: Theme }) => css`
    filter: ${theme['overlay.foreground'] === 'light'
      ? 'invert(100%)'
      : 'none'};
  `}
`;

export const LoginBtn = styled.div`
  align-items: center;
  padding: 0 16px;
  width: 150px;
  height: 42px;
  color: white;
  border-radius: 50px;
  margin-right: 8px;
  margin-bottom: 8px;
  opacity: 1;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
  text-align: center;
  line-height: 42px;
  background-color: rgb(251, 175, 2);
`;

export const SignupBtn = styled.div`
  align-items: center;
  padding: 0 16px;
  width: 150px;
  height: 42px;
  color: white;
  border-radius: 50px;
  margin-right: 8px;
  margin-bottom: 8px;
  opacity: 1;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
  text-align: center;
  line-height: 42px;
  background-color: rgb(251, 175, 2);
`;