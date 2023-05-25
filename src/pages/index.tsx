import React, { useEffect, useRef, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import locale from 'locale';
import useEnvStore from 'stores/useEnvStore';
import useLoadProgressStore from 'stores/useLoadProgressStore';
import useLoadAnimationStore from 'stores/html/useLoadAnimationStore';
import useCameraStore from 'stores/webgl/useCameraStore';
import useLoadMerch from 'hooks/useLoadMerch';
import useThemeSong from 'hooks/useThemeSong';
import useCursorPointer from 'hooks/useCursorPointer';
import useExitBrowser from 'hooks/useExitBrowser';
import useGLStore from 'stores/webgl/useGLStore';

import WebGL from 'components/WebGL';
import LoadingTutorial from '@html/LoadingTutorial';

const Canvas = dynamic(() => import('@react-three/fiber').then(c => c.Canvas), { ssr: false });
const SceneOverlay = dynamic(() => import('@html/SceneOverlay'), { ssr: false });
const CardOverlay = dynamic(() => import('@html/CardOverlay'), { ssr: false });

const Wrapper = styled.div`
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

type Frameloop = "never" | "always";

const ogImgUrl = "https://d2sie3twm806m7.cloudfront.net/sg-2023/sharebanner.jpg";

export default ({ hostUrl }: {
  hostUrl: string
}) => {
  /**
   * Hooks
   */
  useLoadMerch();
  useThemeSong();
  useCursorPointer();
  useExitBrowser();

  const canvas = useRef<HTMLDivElement>(null);

  const env = useEnvStore(state => state.env);
  const dpr = useGLStore(state => state.dpr);
  const fps = useLoadProgressStore(state => state.fps);
  const loading = useLoadAnimationStore(state => state.loading);
  const setCameraStore = useCameraStore(state => state.set);

  const [frameloop, setFrameloop] = useState<Frameloop>("never");

  useEffect(() => {
    if (!canvas.current) return;
    setCameraStore("canvas", canvas.current);
  }, []);

  useEffect(() => {
    const resetFrameloop = () => {
      let fl: Frameloop = "never";

      if (fps.calibrating) fl = "always";
      if (fps.completed) fl = "never";
      if (!loading) fl = "always";

      setFrameloop(fl);
    }

    const setFrameloopNever = () => {
      setFrameloop("never");
    }

    resetFrameloop();

    window.addEventListener("blur", setFrameloopNever);
    window.addEventListener("focus", resetFrameloop);

    return () => {
      window.removeEventListener("blur", setFrameloopNever);
      window.removeEventListener("focus", resetFrameloop);
    }
  }, []);

  /**
   * Not hook
   */
  const renderTutorial = loading && env === "production";
  const renderOverlay = env !== "development";

  /**
   * Render
   */
  return (
    <>
      <Head>
        {/* Open graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={hostUrl} />
        <meta property="og:title" content={locale.global.title} />
        <meta property="og:description" content={locale.global.description} />
        <meta property="og:image" content={ogImgUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={hostUrl} />
        <meta property="twitter:title" content={locale.global.title} />
        <meta property="twitter:description" content={locale.global.description} />
        <meta property="twitter:image" content={ogImgUrl} />
      </Head>

      <Wrapper>
        {renderTutorial && <LoadingTutorial />}

        {renderOverlay && <SceneOverlay />}
        <CardOverlay />

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
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      hostUrl: context.req.headers.host
    }
  }
}