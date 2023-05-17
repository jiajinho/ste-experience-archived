import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

import useLoadAnimationStore from 'stores/html/useLoadAnimationStore';
import useBGMStore from 'stores/useBGMStore';
import useEnvStore from 'stores/useEnvStore';
import useLoadProgressStore from 'stores/useLoadProgressStore';

const url = "/static/ste-theme.wav";

export default () => {
  const env = useEnvStore(state => state.env);

  const loading = useLoadAnimationStore(state => state.loading);
  const typewriter = useLoadAnimationStore(state => state.typewriter);

  const setLoadProgressStore = useLoadProgressStore(state => state.set);
  const mute = useBGMStore(state => state.mute);

  const [interacted, setInteracted] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    const audio = new Audio(url);
    audio.muted = true;
    audio.loop = true;
    audio.volume = 0.2;
    audio.pause();

    const handleAudioCanPlayThrough = () => {
      setLoadProgressStore("html", { bgm: true });
      setAudio(audio);
    }

    audio.addEventListener("canplaythrough", handleAudioCanPlayThrough);
    window.addEventListener("click", () => { setInteracted(true), { once: true } });

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
    if (!interacted) return;
    if (typewriter === "standby") return;

    unmuteAudio();
  }, [audio, typewriter, interacted]);

  useEffect(() => {
    if (!audio) return;
    if (loading) return;

    gsap.to(audio, {
      duration: loading ? 0 : 0.5,
      ease: "power2.out",
      volume: loading ? 0.2 : 0.5
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