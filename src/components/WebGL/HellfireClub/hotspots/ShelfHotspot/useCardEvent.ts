import { ThreeEvent } from '@react-three/fiber';

import { Asset } from 'types';
import useCardStore from 'stores/html/useCardStore';
import useCameraStore from 'stores/webgl/useCameraStore';
import useEnvStore from 'stores/useEnvStore';

export default (merch: Asset.Merch, triggerZoom: () => void) => {
  const env = useEnvStore(state => state.env);
  const currentZoom = useCameraStore(state => state.currentZoom);

  const set = useCardStore(state => state.set);

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    if (env === "development") return;

    if (currentZoom !== "shelf") {
      triggerZoom();
    }
    else {
      e.stopPropagation();
      set("merch", merch);
      set("htmlEvent", "merch");
    }
  }

  return { onClick }
}