import React, { useState } from 'react';
import styled from 'styled-components';

import ProgressNumber from './components/ProgressNumber';
import { AnimatePhase as TypewriterPhase } from './components/Typewriter/types';
import { HellfireCardPhase } from './types';
import STEncounter from './components/STEncounter';
import Typewriter from './components/Typewriter';
import HellfireCard from './components/HellfireCard';

const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  height: 100%;
  width: 100%;

  background: #000d;
`;

export default () => {

  return (
    <Wrapper>
      <STEncounter />

      {/* <ProgressNumber data={0} /> */}

      <Typewriter
        phase={"idle"}
        onContinue={() => { }}
      />

      <HellfireCard
        phase={"idle"}
        onFirstClick={() => { }}
        onSecondClick={() => { }}
      />
    </Wrapper>
  )
}