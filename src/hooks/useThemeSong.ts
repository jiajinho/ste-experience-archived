import { useEffect } from 'react';
import useAudio from './common/useAudio';

export default () => {
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

}