import '../styles/globals.css';
import { useEffect } from 'react';
import styled from 'styled-components';
import type { AppProps } from 'next/app';
import { Stats } from '@react-three/drei';

import useAudio from 'hooks/useAudio';
import { Canvas } from '@react-three/fiber';
import CameraUI from 'components/html/CameraUI';

const Wrapper = styled.main`
  position: relative;
  z-index: 1;

  height: 100vh;
  width: 100vw;
  background: black;
`;

export default ({ Component, pageProps }: AppProps) => {
  const song = useAudio("/static/audio/ste-theme.wav");

  useEffect(() => {
    if (!song) return;

    const play = () => {
      song.loop = true;
      song.volume = 0.1;
      song.play();
    }

    window.addEventListener("click", play, { once: true });
  }, [song]);

  return (
    <>
      <Stats />

      <Wrapper>
        <CameraUI />

        <Canvas style={{ zIndex: 1 }}>
          <Component {...pageProps} />
        </Canvas>
      </Wrapper>
    </>
  );
}