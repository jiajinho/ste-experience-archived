import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  --padding-bottom: 9px;

  position: absolute;
  top: calc(100% + 25px);
  left: 50%;
  transform: translateX(-50%);

  border: none;
  outline: none;
  cursor: pointer;
  background: #FFEDC8;

  padding-top: calc(var(--padding-bottom) + 6px);
  padding-bottom: var(--padding-bottom);
  width: 235px;
  text-align: center;

  font-size: 20px;
  font-family: var(--font-benguiat);

  opacity: 0;
  visibility: hidden;
`;

export default React.forwardRef(({ children, ...props }: {
  children: string
} & Omit<JSX.IntrinsicElements["button"], "ref">,
  ref: React.ForwardedRef<HTMLButtonElement>
) => (
  <Wrapper ref={ref} {...props}>
    {children}
  </Wrapper>
));
