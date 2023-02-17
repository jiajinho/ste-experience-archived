import '../styles/globals.css';
import styled from 'styled-components';
import type { AppProps } from 'next/app';
import { Stats } from '@react-three/drei';
import { Leva } from 'leva';

import { Canvas } from '@react-three/fiber';
import CameraUI from 'components/html/CameraUI';
import useThemeSong from 'hooks/useThemeSong';

const Wrapper = styled.main`
  position: relative;
  z-index: 1;

  height: 100vh;
  width: 100vw;
  background: black;
`;

export default ({ Component, pageProps }: AppProps) => {
  // useThemeSong();

  return (
    <>
      <Stats />
      <Leva theme={{ sizes: { numberInputMinWidth: "50px" } }} />

      <Wrapper>
        <CameraUI />

        <Canvas shadows style={{ zIndex: 1 }}>
          <Component {...pageProps} />
        </Canvas>
      </Wrapper>
    </>
  );
}