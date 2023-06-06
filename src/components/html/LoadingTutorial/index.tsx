import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import useAnimation from './hooks/useAnimation';
import useProgress from './hooks/useProgress';
import useLoadAnimationStore from '@/stores/html/useLoadAnimationStore';

import ProgressNumber from './components/ProgressNumber';
import STEncounter from './components/STEncounter';
import Typewriter from './components/Typewriter';
import HellfireCard from './components/HellfireCard';

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  height: 100%;
  width: 100%;
`;

const Mask = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  background: #040404;
`;

export default () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const mask = useRef<HTMLDivElement>(null);

  const progress = useProgress();

  const setLoadAnimationStore = useLoadAnimationStore(state => state.set);

  useAnimation(mask, wrapper);

  useEffect(() => {
    setLoadAnimationStore("typewriter", "start");
  }, []);

  return (
    <Wrapper ref={wrapper}>
      <Mask ref={mask} />

      <STEncounter />
      <Typewriter />
      <ProgressNumber data={progress.toFixed(0)} />
      <HellfireCard />
    </Wrapper>
  );
}