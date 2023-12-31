import { useEffect } from 'react';
import useEnvStore from '@/stores/useEnvStore';

export default () => {
  const env = useEnvStore(state => state.env);
  const set = useEnvStore(state => state.set);

  useEffect(() => {
    if (env === "production") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code !== "KeyD") return;
      if (!e.shiftKey) return;

      if (env === "staging") {
        set("development");
      }
      else {
        set("staging");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [env, set]);
}