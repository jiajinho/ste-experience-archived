import '../styles/globals.css';
import styled from 'styled-components';
import type { AppProps } from 'next/app';
import { Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';

import useToggleEnv from 'hooks/useToggleEnv';
import useEnvStore from 'store/useEnvStore';
import CameraUI from 'components/html/CameraUI';

const Wrapper = styled.main`
  position: relative;
  z-index: 1;

  height: 100vh;
  width: 100vw;
  background: black;
`;

export default ({ Component, pageProps }: AppProps) => {
  const env = useEnvStore(state => state.env);

  // useThemeSong();

  useToggleEnv();

  return (
    <>
      {env === "development" && <Stats />}

      <Leva
        collapsed
        hidden={env !== "development"}
        theme={{ sizes: { numberInputMinWidth: "50px" } }}
      />

      <Wrapper>
        <CameraUI />

        <Canvas shadows style={{ zIndex: 1 }}>
          <Component {...pageProps} />
        </Canvas>
      </Wrapper>
    </>
  );
}