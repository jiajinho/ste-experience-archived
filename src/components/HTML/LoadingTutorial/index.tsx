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
      <STEncounter />

      <ProgressNumber data={0} />

      <Typewriter />

      <HellfireCard />
    </Wrapper>
  )
}