import * as React from 'react';
import { SignupBtn } from './style';

export const getSize = (i: number) => {
  const width = 800;
  return (width - 48 - (i - 1)) / i;
};

export const RoundBtn = ({
  children,
  onClick,
  enabled,
}: {
  children?: any;
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  enabled?: boolean;
}) => {
  return (
    <SignupBtn
      enabled={enabled}
      onClick={enabled ? onClick : null}
    >
      {children}
    </SignupBtn>
  );
};

RoundBtn.defaultProps = {
  enabled: false
};
