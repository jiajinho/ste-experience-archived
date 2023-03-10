import React from 'react';
import styled from 'styled-components';

import ProgressNumber from './components/ProgressNumber';
import STEncounter from './components/STEncounter';
import Typewriter from './components/Typewriter';
import HellfireCard from './components/HellfireCard';
import useLoadingPhaseStore from 'store/html/useLoadingPhaseStore';
import { button, useControls } from 'leva';

const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  height: 100%;
  width: 100%;

  background: #000d;
`;

export default () => {

  const set = useLoadingPhaseStore(state => state.set);

  useControls("progress", {
    idle: button(() => set("progress", "idle")),
    end: button(() => set("progress", "end"))
  });

  useControls("ste", {
    idle: button(() => set("ste", "idle")),
    end: button(() => set("ste", "end"))
  });

  useControls("typewriter", {
    idle: button(() => set("typewriter", "idle")),
    start: button(() => set("typewriter", "start")),
    end: button(() => set("typewriter", "end")),
  });

  useControls("card", {
    idle: button(() => set("card", "idle")),
    slide: button(() => set("card", "slide")),
    flip: button(() => set("card", "flip")),
    end: button(() => set("card", "end"))
  });

  return (
    <Wrapper>
      <STEncounter />

      <ProgressNumber data={0} />

      <Typewriter />

      <HellfireCard />
    </Wrapper>
  )
}