import { useEffect, useState } from 'react';

import useLoadAnimationStore from 'stores/html/useLoadAnimationStore';
import useBGMStore from 'stores/useBGMStore';
import useEnvStore from 'stores/useEnvStore';
import useLoadProgressStore from 'stores/useLoadProgressStore';

const url = "/static/ste-theme.wav";

export default () => {
  const env = useEnvStore(state => state.env);

  const loading = useLoadAnimationStore(state => state.loading);

  const loadProgress = useLoadProgressStore(state => state.html);
  const setLoadProgressStore = useLoadProgressStore(state => state.set);

  const mute = useBGMStore(state => state.mute);

  const [audio, setAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    const audio = new Audio(url);

    audio.addEventListener("canplaythrough", () => {
      setLoadProgressStore("html", { bgm: true });
    });

    setAudio(audio);
  }, []);

  useEffect(() => {
    if (!audio) return;
    if (!loadProgress.bgm) return;

    const play = () => {
      audio.loop = true;
      audio.volume = 0.2;
      audio.play();
    }

    window.addEventListener("click", play, { once: true });
  }, [audio, loadProgress]);

  useEffect(() => {
    if (!audio) return;

    audio.volume = loading ? 0.2 : 0.5;
  }, [audio, loading]);

  useEffect(() => {
    if (!audio) return;

    if (env === "development" || mute) {
      audio.muted = true;
      audio.pause();
    }
    else {
      audio.muted = false;
      audio.play();
    }
  }, [audio, env, mute]);
}