import React, { useState } from 'react';
import styled from 'styled-components';
import { button, useControls } from 'leva';

import ProgressNumber from './components/ProgressNumber';
import STEncounter from './components/STEncounter';
import Typewriter from './components/Typewriter';
import { AnimatePhase } from './components/Typewriter/types';

const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  height: 100%;
  width: 100%;

  background: #000d;
`;

export default () => {

  const [x, setX] = useState<AnimatePhase>("idle");

  const handleClick = () => {
    console.log(x);
    setX(x === "idle" ? "start" : "idle");
  }

  useControls("animation", {
    playTypewriter: button(handleClick)
  }, [x]);

  return (
    <Wrapper>
      <STEncounter />

      {/* <ProgressNumber data={0} /> */}

      <Typewriter
        phase={x}
        onContinue={() => setX("end")}
      />
    </Wrapper>
  )
}