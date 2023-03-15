import styled from 'styled-components';
import type { AppProps } from 'next/app';
import { Stats } from '@react-three/drei';
import { Leva } from 'leva';

import '../globals.css';
import useToggleEnv from 'hooks/useToggleEnv';
import useEnvStore from 'store/useEnvStore';
import fonts from 'fonts';

const App = styled.div`
  --font-benguiat: ${fonts.benguiat.style.fontFamily};
  --font-inter: ${fonts.inter.style.fontFamily};
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

      <App>
        <Component {...pageProps} />
      </App>
    </>
  );
}