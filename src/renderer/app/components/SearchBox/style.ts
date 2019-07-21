import styled, { css } from 'styled-components';
import { centerIcon } from '~/shared/mixins';
import { icons } from '../../constants';

import { Theme } from '../../models/theme';
import { transparency } from '~/renderer/constants';

export const SearchBoxContainer = styled.div`
  position: absolute;
  z-index: 9999;
  top: 38px;
  left: 0;
  right: 0;
  background-color: rgb(30, 30, 30);
  ${({ theme }: { theme?: Theme }) => css`
    background-color: ${theme['overlay.backgroundColor']};
    color: ${theme['overlay.foreground'] === 'light'
      ? 'white'
      : `rgba(0, 0, 0, ${transparency.text.high})`};∂
  `};
`;

export const StyledSearchBox = styled.div`
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: 3px;
  margin-right: 3px;

  border-radius: 21px;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  min-height: 42px;
  transition: 0.2s height;

  ${({ theme }: { theme?: Theme }) => css`
    background-color: ${theme['overlay.section.backgroundColor']};
  `}
`;

export const SearchIcon = styled.div`
  ${centerIcon()};
  background-image: url(${icons.search});
  height: 18px;
  min-width: 18px;
  margin-left: 16px;

  ${({ theme }: { theme?: Theme }) => css`
    filter: ${theme['overlay.foreground'] === 'light'
      ? 'invert(100%)'
      : 'none'};
  `}
`;

export const Input = styled.input`
  height: 100%;
  flex: 1;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
  margin-left: 12px;
  margin-right: 16px;

  ${({ theme }: { theme?: Theme }) => css`
    color: ${theme['overlay.foreground'] === 'light'
      ? 'white'
      : `rgba(0, 0, 0, ${transparency.text.high})`};

    &::placeholder {
      color: rgba(255, 255, 255, 0.54);

      color: ${theme['overlay.foreground'] === 'light'
        ? `rgba(255, 255, 255, ${transparency.text.medium})`
        : `rgba(0, 0, 0, ${transparency.text.medium})`};
    }
  `}
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 42px;
  height: 42px;
  background-color: rgba(0, 0, 0, 0.1);
`;
