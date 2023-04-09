import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

import useEnvStore from 'stores/useEnvStore';
import useLoadAnimationStore from 'stores/html/useLoadAnimationStore';
import useCameraStore from 'stores/webgl/useCameraStore';

import WebGL from 'components/WebGL';
import LoadingTutorial from '@html/LoadingTutorial';
import SceneOverlay from '@html/SceneOverlay';
import CardOverlay from '@html/CardOverlay';

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

  const env = useEnvStore(state => state.env);
  const loading = useLoadAnimationStore(state => state.loading);
  const setCameraStore = useCameraStore(state => state.set);

  const renderTutorial = loading && env === "production";
  const renderOverlay = env !== "development";

  useEffect(() => {
    if (!canvas.current) return;
    setCameraStore("canvas", canvas.current);
  }, []);

  return (
    <Wrapper>
      {renderTutorial && <LoadingTutorial />}
      {renderOverlay && <SceneOverlay />}

      <CardOverlay />

      <CanvasContainer ref={canvas}>
        <Canvas
          shadows
          frameloop={env === "production" && loading ? "demand" : "always"}
          camera={{ fov: 50 }}
        >
          <WebGL />
        </Canvas>
      </CanvasContainer>
    </Wrapper>
  )
}