import { useState, useEffect } from 'react';

export default (url: string) => {
  const [audio, setAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    const audio = new Audio(url);
    audio.loop = true;
    audio.volume = 0.2;
    setAudio(audio);

    const play = () => {
      audio.play();
    }

    window.addEventListener("click", play, { once: true });
  }, []);

  return audio;
}