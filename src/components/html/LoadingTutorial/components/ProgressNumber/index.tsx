import React, { useRef } from 'react';
import styled from 'styled-components';

import config from 'config';
import glitch from './glitch';
import useAnimation from './useAnimation';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Percentage = styled.div(({ $content }: { $content: string }) => `
  font-size: 100px;
  font-family: var(--font-benguiat);
  font-weight: 700;
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

  @media screen and (min-width: ${config.viewport.md}) {
    font-size: 160px;
  }
`);

export default ({ data }: { data: string }) => {
  const wrapper = useRef<HTMLDivElement>(null);

  const progress = useAnimation(wrapper, data);
  const content = `${progress}%`;

  return (
    <Wrapper ref={wrapper}>
      <Percentage $content={content}>
        {content}
      </Percentage>
    </Wrapper>
  );
}