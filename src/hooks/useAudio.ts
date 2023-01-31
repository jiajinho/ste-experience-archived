import { useState, useEffect } from 'react';

export default (url: string) => {
  const [audio, setAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    const audio = new Audio(url);
    setAudio(audio);
  }, []);

  return audio;
}