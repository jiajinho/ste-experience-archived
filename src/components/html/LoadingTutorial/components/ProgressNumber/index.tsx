import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import config from '@/config';
import glitch from './glitch';
import api from '@/api';
import { MixpanelEvent } from '@/api/mixpanel';
import useAnimation from './useAnimation';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  opacity: 0;
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

const LoadingText = styled.p`
  position: absolute;
  top: calc(100% - 15px);
  left: 50%;
  transform: translateX(-50%);

  color: var(--color-frosted-lemon);
  font-family: var(--font-benguiat);
  font-weight: 700;
  font-size: 22px;
  white-space: nowrap;
`;

export default ({ data }: { data: string }) => {
  const wrapper = useRef<HTMLDivElement>(null);

  const [progress, loadingText] = useAnimation(wrapper, data);
  const content = `${progress}%`;

  useEffect(() => {
    api.mixpanel(MixpanelEvent.START);
  }, []);

  return (
    <Wrapper ref={wrapper}>
      <Percentage $content={content}>
        {content}
      </Percentage>

      <LoadingText>
        {loadingText}
      </LoadingText>
    </Wrapper>
  );
}