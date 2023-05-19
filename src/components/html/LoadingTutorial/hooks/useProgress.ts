import { useEffect, useState } from 'react';

import useLoadAnimationStore from 'stores/html/useLoadAnimationStore';
import useLoadProgressStore from 'stores/useLoadProgressStore';

export default () => {
  const [progress, setProgress] = useState(0);

  const set = useLoadAnimationStore(state => state.set);
  const { webgl, html, fps } = useLoadProgressStore(state => state);

  useEffect(() => {
    let total = (webgl.total || 0)
    total += Object.keys(html).length;
    total += 1; //fps.completed

    const htmlLoaded = Object.entries(html).reduce((prev, current) => {
      if (current[1]) return prev + 1;
      return prev;
    }, 0);

    let loaded = webgl.loaded + htmlLoaded;
    fps.completed && loaded++;

    const progress = (loaded / total) * 100;
    setProgress(progress);
  }, [webgl, html, fps]);

  useEffect(() => {
    if (progress >= 100) {
      set("progress", "end");
    }
  }, [progress]);

  return progress;
}