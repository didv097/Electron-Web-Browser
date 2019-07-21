import { transparency } from '~/renderer/constants';
import styled, { css } from 'styled-components';

export const StyledSuggestions = styled.div`
  width: 100%;
  overflow: hidden;
  position: absolute;
  margin-top: 42px;

  ${({ visible }: { visible: boolean }) => css`
    display: ${visible ? 'block' : 'none'};
  `};
`;
