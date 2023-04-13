import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

import useEnvStore from 'stores/useEnvStore';
import useLoadAnimationStore from 'stores/html/useLoadAnimationStore';
import useCameraStore from 'stores/webgl/useCameraStore';
import useGLStore from 'stores/webgl/useGLStore';
import useLoadProgressStore from 'stores/useLoadProgressStore';

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
  /**
   * Hooks
   */
  const canvas = useRef<HTMLDivElement>(null);

  const env = useEnvStore(state => state.env);
  const dpr = useGLStore(state => state.dpr);
  const fps = useLoadProgressStore(state => state.fps);
  const loading = useLoadAnimationStore(state => state.loading);
  const setCameraStore = useCameraStore(state => state.set);

  useEffect(() => {
    if (!canvas.current) return;
    setCameraStore("canvas", canvas.current);
  }, []);

  /**
   * Not hook
   */
  const renderTutorial = loading && env === "production";
  const renderOverlay = env !== "development";

  let frameloop: "demand" | "always" = "demand";

  if (!loading || fps.calibrating || env === "development" || env === "staging") {
    frameloop = "always";
  }

  /**
   * Render
   */
  return (
    <Wrapper>
      {renderTutorial && <LoadingTutorial />}
      {renderOverlay && <SceneOverlay />}

      <CardOverlay />

      <CanvasContainer ref={canvas}>
        <Canvas
          shadows
          frameloop={frameloop}
          camera={{ fov: 50 }}
          dpr={dpr}
        >
          <WebGL />
        </Canvas>
      </CanvasContainer>
    </Wrapper>
  )
}