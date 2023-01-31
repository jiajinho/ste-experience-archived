import '../styles/globals.css';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Stats } from '@react-three/drei';

import useAudio from 'hooks/useAudio';

export default ({ Component, pageProps }: AppProps) => {
  const song = useAudio("/static/audio/ste-theme.wav");

  useEffect(() => {
    if (!song) return;

    const play = () => {
      song.loop = true;
      song.volume = 0.2;
      song.play();
    }

    window.addEventListener("click", play, { once: true });
  }, [song]);

  return (
    <>
      <Stats />
      <Component {...pageProps} />
    </>
  );
}