import React, { useRef } from 'react';
import styled from 'styled-components';

import useAnimation from './useAnimation';
import useDebug from './useDebug';

import ProgressNumber from './components/ProgressNumber';
import STEncounter from './components/STEncounter';
import Typewriter from './components/Typewriter';
import HellfireCard from './components/HellfireCard';

const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  height: 100%;
  width: 100%;
`;

const Mask = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  background: #000;
  opacity: 0.9;
`;

export default () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const mask = useRef<HTMLDivElement>(null);

  useAnimation(mask, wrapper);

  useDebug();

  return (
    <Wrapper ref={wrapper}>
      <Mask ref={mask} />

      <STEncounter />
      <ProgressNumber data={0} />
      <Typewriter />
      <HellfireCard />
    </Wrapper>
  );
}