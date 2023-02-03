import React from 'react';
import useCameraStore from 'store/useCameraStore';
import styled from 'styled-components';

import Caret, { Wrapper as $Caret } from './Caret';

const Wrapper = styled.div`
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

export default () => {
  const cameras = useCameraStore(state => state.cameras);

  const currentCamera = useCameraStore(state => state.current);
  const setCurrentCamera = useCameraStore(state => state.setCurrent);


  const goToPreviousCamera = () => {
    let index = cameras.findIndex(c => c === currentCamera);
    if (index === -1) return;

    if (--index < 0) {
      index = cameras.length - 1;
    }

    setCurrentCamera(cameras[index]);
  }

  const goToNextCamera = () => {
    let index = cameras.findIndex(c => c === currentCamera);
    if (index === -1) return;

    if (++index > cameras.length - 1) {
      index = 0;
    }

    setCurrentCamera(cameras[index]);
  }


  return (
    <Wrapper>
      <Caret
        id="left"
        direction="left"
        color="#CA1515"
        onClick={goToPreviousCamera}
      />

      <Caret
        id="right"
        direction="right"
        color="#CA1515"
        onClick={goToNextCamera}
      />
    </Wrapper>
  )
}