import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

import useLoadAnimationStore from 'stores/html/useLoadAnimationStore';
import useBGMStore from 'stores/useBGMStore';
import useEnvStore from 'stores/useEnvStore';
import useLoadProgressStore from 'stores/useLoadProgressStore';

const url = "/static/strangerthings.mp3";

export default () => {
  const env = useEnvStore(state => state.env);

  const loading = useLoadAnimationStore(state => state.loading);
  const setLoadProgressStore = useLoadProgressStore(state => state.set);
  const mute = useBGMStore(state => state.mute);

  const [audio, setAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    const audio = new Audio(url);
    audio.loop = true;
    audio.volume = 0.2;

    const handleAudioCanPlayThrough = () => {
      setLoadProgressStore("html", { bgm: true });
      setAudio(audio);

      audio.play().catch(() => {
        window.addEventListener("click", () => audio.play(), { once: true });
      });
    }

    audio.addEventListener("canplaythrough", handleAudioCanPlayThrough);
    return () => { audio.removeEventListener("canplaythrough", handleAudioCanPlayThrough) }
  }, []);

  useEffect(() => {
    const handleWindowBlur = () => {
      muteAudio();
    }

    const handleWindowFocus = () => {
      if (mute) return;
      if (env === "development") return;
      unmuteAudio();
    }

    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);

    return () => {
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
    }
  }, [mute, audio, env]);


  useEffect(() => {
    if (!audio) return;
    if (loading) return;

    gsap.to(audio, {
      duration: loading ? 0 : 0.7,
      ease: "power2.out",
      volume: loading ? 0.1 : 0.35
    });

  }, [audio, loading]);

  useEffect(() => {
    if (!audio) return;

    if (mute) {
      muteAudio();
      return;
    }

    switch (env) {
      case "staging":
      case "production":
        unmuteAudio();
        break;
      default:
        muteAudio();
    }
  }, [audio, env, mute]);


  /**
   * Not hook
   */
  const muteAudio = () => {
    if (!audio) return;

    audio.muted = true;
    audio.pause();
  }

  const unmuteAudio = () => {
    if (!audio) return;

    audio.muted = false;
    audio.play();
  }
}