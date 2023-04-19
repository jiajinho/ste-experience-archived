import React from 'react';
import styled from 'styled-components';

import { IntrinsicHTML } from 'types';
import { applyStyleIf } from 'utils';

export const Wrapper = styled.button((props: IntrinsicHTML<"button">) => `
  padding: 8px 28px;
  font-size: 16px;
  background: var(--color-blood);
  color: #aaa;

  outline: none;
  border: none;

  ${applyStyleIf(!!props.onClick, `
    cursor: pointer;
  `)}
`);

const Text = styled.p`
  transform: translateY(1px);
  text-transform: uppercase;
  font-weight: 700;
  font-family: var(--font-benguiat);
  white-space: nowrap;
`;

export default ({ children, ...props }: {
  children: string
} & IntrinsicHTML<"button">) => (
  <Wrapper {...props}>
    <Text>
      {children}
    </Text>
  </Wrapper>
);
