import React from 'react';
import styled from 'styled-components';

import Caret, { Wrapper as $Caret } from './Caret';
import useCameraStore from 'store/useCameraStore';

const Wrapper = styled.div`
  & * { z-index: 2 }

  ${$Caret} {
    position: fixed;
    z-index: 2;
    top: 50%;

    transform: translateY(-50%);
  }

  ${$Caret}#right {
    right: 0;
  }
`;

const BackButton = styled.button`
  position: fixed;
  bottom: 10px;
  left: 10px;
  padding: 5px 10px;
`;

export default () => {

  const setHotspot = useCameraStore(state => state.set);

  const handleBackClick = () => {
    setHotspot("default", null);
  }

  return (
    <Wrapper>
      <Caret
        id="left"
        direction="left"
        color="#CA1515"
      />

      <Caret
        id="right"
        direction="right"
        color="#CA1515"
      />

      <BackButton onClick={handleBackClick}>
        Back
      </BackButton>
    </Wrapper>
  )
}