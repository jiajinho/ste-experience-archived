import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

import useLoadAnimationStore from 'stores/html/useLoadAnimationStore';

import WebGL from 'components/WebGL';
import LoadingTutorial from '@html/LoadingTutorial';
import SceneOverlay from '@html/SceneOverlay';

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

      <SceneOverlay />

      <Canvas
        shadows
        style={{ zIndex: 1 }}
        frameloop={renderTutorial ? "demand" : "always"}
      >
        <WebGL />
      </Canvas>
    </Wrapper>
  )
}