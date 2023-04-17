import React from 'react';
import styled from 'styled-components';

import { IntrinsicHTML } from 'types';
import { applyStyleIf } from 'utils';

export const Wrapper = styled.button((props: IntrinsicHTML<"button">) => `
  padding: 20px 60px;
  font-size: 32px;
  background: purple;

  outline: none;
  border: none;

  text-transform: uppercase;
  font-weight: 700;
  color: #aaa;
  background: var(--color-blood);

  ${applyStyleIf(!!props.onClick, `
    cursor: pointer;
  `)}
`);

export default ({ children, ...props }: {
  children: string
} & IntrinsicHTML<"button">) => (
  <Wrapper {...props}>
    {children}
  </Wrapper>
);
