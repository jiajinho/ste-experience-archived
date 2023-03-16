import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

import useLoadAnimationStore from 'stores/html/useLoadAnimationStore';

import WebGL from 'components/WebGL';
import LoadingTutorial from '@html/LoadingTutorial';
import SceneOverlay from '@html/SceneOverlay';
import useEnvStore from 'stores/useEnvStore';

const Wrapper = styled.main`
  position: relative;
  z-index: 1;

  height: 100vh;
  width: 100vw;
  background: black;
`;

export default () => {
  const env = useEnvStore(state => state.env);
  const loading = useLoadAnimationStore(state => state.loading);

  const renderTutorial = loading && env === "production";
  const renderOverlay = env !== "development";

  return (
    <Wrapper>
      {renderTutorial && <LoadingTutorial />}

      {renderOverlay && <SceneOverlay />}

      <Canvas
        shadows
        style={{ zIndex: 1 }}
        frameloop={env === "production" && loading ? "demand" : "always"}
      >
        <WebGL />
      </Canvas>
    </Wrapper>
  )
}