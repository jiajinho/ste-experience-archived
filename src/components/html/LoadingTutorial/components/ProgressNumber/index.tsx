import React, { useRef } from 'react';
import styled from 'styled-components';

import glitch from './glitch';
import useAnimation from './useAnimation';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Percentage = styled.div(({ $content }: { $content: string }) => `
  font-size: 160px;
  font-family: var(--font-benguiat);
  letter-spacing: -0.75px;
  color: var(--color-cherry);
  transform-origin: center;
  
  &:before, &:after {
    content: '${$content}';
    position: absolute;
    top: 0;
    left: 0;
  }

  ${glitch.core};
  &:before { ${glitch.bottom} }
  &:after { ${glitch.top} }
`);

export default ({ data }: { data: string }) => {
  const wrapper = useRef<HTMLDivElement>(null);

  useAnimation(wrapper);

  const content = `${data}%`;

  return (
    <Wrapper ref={wrapper}>
      <Percentage $content={content}>
        {content}
      </Percentage>
    </Wrapper>
  );
}