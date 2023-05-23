import React, { useEffect, useRef, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

import useEnvStore from 'stores/useEnvStore';
import useLoadProgressStore from 'stores/useLoadProgressStore';
import useLoadAnimationStore from 'stores/html/useLoadAnimationStore';
import useCameraStore from 'stores/webgl/useCameraStore';
import useGLStore from 'stores/webgl/useGLStore';

import WebGL from 'components/WebGL';
import LoadingTutorial from '@html/LoadingTutorial';

const SceneOverlay = lazy(() => import('@html/SceneOverlay'));
const CardOverlay = lazy(() => import('@html/CardOverlay'));

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

const Main = () => {
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

  let frameloop: "always" | "never" = "never";

  if (fps.calibrating) frameloop = "always";
  if (fps.completed) frameloop = "never";
  if (!loading) frameloop = "always";

  /**
   * Render
   */
  return (
    <Wrapper>
      {renderTutorial && <LoadingTutorial />}

      <Suspense fallback={null}>
        {renderOverlay && <SceneOverlay />}
        <CardOverlay />
      </Suspense>

      <CanvasContainer ref={canvas}>
        <Canvas
          shadows
          gl={{ alpha: false }}
          camera={{ fov: 50 }}
          frameloop={frameloop}
          dpr={dpr}
        >
          <WebGL />
        </Canvas>
      </CanvasContainer>
    </Wrapper>
  )
}

export default dynamic(() => Promise.resolve(Main), {
  ssr: false,
});