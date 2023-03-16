import styled from 'styled-components';
import type { AppProps } from 'next/app';
import { Stats } from '@react-three/drei';
import { Leva } from 'leva';

import '../globals.css';
import fonts from 'fonts';
import useToggleEnv from 'hooks/useToggleEnv';
import useEnvStore from 'stores/useEnvStore';
import useResponsive from 'hooks/useResponsive';

const App = styled.div`
  --font-benguiat: ${fonts.benguiat.style.fontFamily};
  --font-inter: ${fonts.inter.style.fontFamily};
`;

export default ({ Component, pageProps }: AppProps) => {
  const env = useEnvStore(state => state.env);

  // useThemeSong();

  useResponsive();
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