import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

import useLoadAnimationStore from 'store/html/useLoadAnimationStore';

import WebGL from 'components/WebGL';
import LoadingTutorial from '@html/LoadingTutorial';

const Wrapper = styled.main`
  position: relative;
  z-index: 1;

  height: 100vh;
  width: 100vw;
  background: black;
`;

export default () => {

  const renderTutorial = useLoadAnimationStore(state => state.renderPage);

  return (
    <Wrapper>
      {renderTutorial && <LoadingTutorial />}

      <Canvas
        shadows
        style={{ zIndex: 1 }}
        frameloop="demand"
      >
        <WebGL />
      </Canvas>
    </Wrapper>
  )
}