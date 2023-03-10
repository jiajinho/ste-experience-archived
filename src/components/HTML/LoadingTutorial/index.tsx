import React, { useRef } from 'react';
import styled from 'styled-components';
import { button, useControls } from 'leva';

import useLoadingPhaseStore from 'store/html/useLoadingPhaseStore';
import useAnimation from './useAnimation';

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
  const mask = useRef<HTMLDivElement>(null);

  const set = useLoadingPhaseStore(state => state.set);

  useAnimation(mask);

  useControls("mask", {
    dark: button(() => set("mask", "dark")),
    cloudy: button(() => set("mask", "cloudy")),
    clear: button(() => set("mask", "clear")),
  })

  useControls("progress", {
    standby: button(() => set("progress", "standby")),
    end: button(() => set("progress", "end"))
  });

  useControls("ste", {
    standby: button(() => set("ste", "standby")),
    end: button(() => set("ste", "end"))
  });

  useControls("typewriter", {
    standby: button(() => set("typewriter", "standby")),
    start: button(() => set("typewriter", "start")),
    end: button(() => set("typewriter", "end")),
  });

  useControls("card", {
    standby: button(() => set("card", "standby")),
    slide: button(() => set("card", "slide")),
    flip: button(() => set("card", "flip")),
    end: button(() => set("card", "end"))
  });

  return (
    <Wrapper>
      <Mask ref={mask} />

      <STEncounter />

      <ProgressNumber data={0} />

      <Typewriter />

      <HellfireCard />
    </Wrapper>
  );
}