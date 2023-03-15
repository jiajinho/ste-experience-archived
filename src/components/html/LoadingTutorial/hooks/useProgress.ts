import { useEffect, useState } from 'react';

import useLoadAnimationStore from 'stores/html/useLoadAnimationStore';
import useLoadProgressStore from 'stores/useLoadProgressStore';

export default () => {
  const [progress, setProgress] = useState(0);

  const set = useLoadAnimationStore(state => state.set);
  const { webgl, html } = useLoadProgressStore(state => state);

  useEffect(() => {
    const total = (webgl.total || 0) + Object.keys(html).length;

    const htmlLoaded = Object.entries(html).reduce((prev, current) => {
      if (current[1]) return prev + 1;
      return prev;
    }, 0);

    const loaded = webgl.loaded + htmlLoaded;
    setProgress((loaded / total) * 100);
  }, [webgl, html]);

  useEffect(() => {
    if (progress >= 100) {
      set("progress", "end");
    }
  }, [progress]);

  return progress;
}