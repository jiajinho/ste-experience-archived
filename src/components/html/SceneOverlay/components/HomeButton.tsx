import React from 'react';
import styled from 'styled-components';

import useCameraStore from 'stores/webgl/useCameraStore';
import HexRing, { Wrapper as $HexRing } from '@html/common/svg/HexRing';
import Clock, { Wrapper as $Clock } from '@html/common/svg/Clock';

export const Wrapper = styled.div`
  position: relative;
  pointer-events: auto;
  cursor: pointer;

  ${$HexRing} {
    height: 60px;
  }

  ${$Clock} {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    width: 52%;
  }
`;

export default () => {
  const setCameraStore = useCameraStore(state => state.set);

  const goToDefaultView = () => {
    setCameraStore("currentZoom", "default");
  }

  return (
    <Wrapper onClick={goToDefaultView}>
      <HexRing />
      <Clock />
    </Wrapper>
  );
}
