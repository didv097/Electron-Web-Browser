import styled, { css } from 'styled-components';

export const SignupBtn = styled.div`
  align-items: center;
  margin-top: 200px;
  height: 42px;
  border-radius: 50px;
  text-align: center;
  line-height: 42px;
  color: white;
  ${({ enabled }: { enabled: boolean }) => css`
    background-color: ${(enabled ? 'rgb(251, 175, 2)' : 'rgb(120, 120, 120)')};
  `}
`;
