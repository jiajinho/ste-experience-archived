import styled from 'styled-components';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Stats } from '@react-three/drei';
import { Leva } from 'leva';

import '../globals.css';
import locale from 'locale';
import fonts from 'fonts';
import useToggleEnv from 'hooks/useToggleEnv';
import useEnvStore from 'stores/useEnvStore';
import useResponsive from 'hooks/useResponsive';
import useCursorPointer from 'hooks/useCursorPointer';
import useThemeSong from 'hooks/useThemeSong';

const App = styled.div`
  --font-benguiat: ${fonts.benguiat.style.fontFamily};
  --font-inter: ${fonts.inter.style.fontFamily};
  --font-chalkiez: ${fonts.chalkiez.style.fontFamily};
`;

export default ({ Component, pageProps }: AppProps) => {
  const env = useEnvStore(state => state.env);

  useThemeSong();
  useResponsive();
  useToggleEnv();
  useCursorPointer();

  return (
    <>
      {env === "development" && <Stats />}

      <Leva
        collapsed
        hidden={env !== "development"}
        theme={{ sizes: { numberInputMinWidth: "50px" } }}
      />

      <Head>
        <title>{locale.global.title}</title>

        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>

      <App>
        <Component {...pageProps} />
      </App>
    </>
  );
}