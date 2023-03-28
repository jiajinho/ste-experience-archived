import React, { useRef } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

import useLoadAnimationStore from 'stores/html/useLoadAnimationStore';
import useCameraPan from 'hooks/useCameraPan';
import useEnvStore from 'stores/useEnvStore';

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

const CanvasContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
`;

export default () => {
  const canvas = useRef<HTMLDivElement>(null);
  useCameraPan(canvas);

  const env = useEnvStore(state => state.env);
  const loading = useLoadAnimationStore(state => state.loading);

  const renderTutorial = loading && env === "production";
  const renderOverlay = env !== "development";

  return (
    <Wrapper>
      {renderTutorial && <LoadingTutorial />}

      {renderOverlay && <SceneOverlay />}

      <CanvasContainer ref={canvas}>
        <Canvas
          shadows
          // frameloop={env === "production" && loading ? "demand" : "always"}
          frameloop="always"
        >
          <WebGL />
        </Canvas>
      </CanvasContainer>
    </Wrapper>
  )
}