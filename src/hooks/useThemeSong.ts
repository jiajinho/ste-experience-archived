import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

import useLoadAnimationStore from '@/stores/html/useLoadAnimationStore';
import useBGMStore from '@/stores/useBGMStore';
import useEnvStore from '@/stores/useEnvStore';
import useLoadProgressStore from '@/stores/useLoadProgressStore';
import useAssetEnvUrl from './common/useAssetEnvUrl';

const lowVolume = 0.2;
const highVolume = 0.35;

export default () => {
  const url = useAssetEnvUrl('static/bgm.mp3');

  const env = useEnvStore(state => state.env);

  const loading = useLoadAnimationStore(state => state.loading);
  const setLoadProgressStore = useLoadProgressStore(state => state.set);

  const [audio, setAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    const audio = new Audio(url);
    audio.loop = true;
    audio.volume = lowVolume;
    audio.muted = true;
    audio.load();

    const handleCanPlayThrough = () => {
      setLoadProgressStore("html", { bgm: true });
      setAudio(audio);

      audio.play().catch(() => {
        window.addEventListener("click", () => audio.play(), { once: true });
      });
    }

    audio.addEventListener("canplaythrough", handleCanPlayThrough, { once: true });
    return () => { audio.removeEventListener("canplaythrough", handleCanPlayThrough) }
  }, [url, setLoadProgressStore]);

  useEffect(() => {
    if (!audio) return;

    const muteAudio = () => {
      audio.muted = true;
      audio.pause();
    }

    const unmuteAudio = () => {
      const mute = useBGMStore.getState().mute;

      if (!mute) {
        audio.muted = false;
        audio.play().catch(() => {
          window.addEventListener("click", () => audio.play(), { once: true });
        });
      }
    }

    if (env === "development") {
      muteAudio();
      return;
    }

    unmuteAudio();

    const unsubscribe = useBGMStore.subscribe(({ mute }) => {
      mute ? muteAudio() : unmuteAudio();
    });

    window.addEventListener("blur", muteAudio);
    window.addEventListener("focus", unmuteAudio);

    return () => {
      window.removeEventListener("blur", muteAudio);
      window.removeEventListener("focus", unmuteAudio);
      unsubscribe();
    }
  }, [env, audio]);


  useEffect(() => {
    if (!audio) return;

    gsap.to(audio, {
      duration: loading ? 0 : 0.7,
      ease: "power2.out",
      volume: loading ? lowVolume : highVolume
    });
  }, [audio, loading]);
}