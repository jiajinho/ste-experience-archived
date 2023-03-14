import { useEffect, useState } from 'react';
import useLoadAnimationStore from 'store/html/useLoadAnimationStore';
import useLoaderStore from 'store/useLoaderStore';

export default () => {
  const [progress, setProgress] = useState(0);

  const setLoadAnimateStore = useLoadAnimationStore(state => state.set);
  const { webgl, html } = useLoaderStore(state => state);

  useEffect(() => {
    const total = webgl.total || 0 + Object.keys(html).length;

    const loadedHtml = Object.entries(html).reduce((prev, current) => {
      if (current[1]) return prev + 1;
      return prev;
    }, 0);

    const loaded = webgl.loaded + loadedHtml;
    setProgress((loaded / total) * 100);
  }, [webgl, html]);

  useEffect(() => {
    if (progress >= 100) {
      setLoadAnimateStore("progress", "end");
    }
  }, [progress]);

  return progress;
}