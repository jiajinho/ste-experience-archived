import React from 'react';
import styled from 'styled-components';

import { IntrinsicHTML } from 'types';
import { applyStyleIf } from 'utils';

export const Wrapper = styled.button((props: IntrinsicHTML<"button">) => `
  --edge-length: 8px;
  --opposite-length: calc(100% - var(--edge-length));

  padding: 8px 28px;
  font-size: 16px;
  background: var(--color-blood);
  color: #aaa;

  outline: none;
  border: none;

  clip-path: polygon(
    var(--edge-length) 0%, 0% var(--edge-length), 
    0% var(--opposite-length), var(--edge-length) 100%, 
    var(--opposite-length) 100%, 100% var(--opposite-length), 
    100% var(--edge-length), var(--opposite-length) 0%
  );

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
