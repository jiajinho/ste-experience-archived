import { ThreeEvent } from '@react-three/fiber';

import { Asset } from 'types';
import useCardStore from 'stores/html/useCardStore';
import useCameraStore from 'stores/webgl/useCameraStore';

export default (merch: Asset.Merch, triggerZoom: () => void) => {
  const currentZoom = useCameraStore(state => state.currentZoom);

  const set = useCardStore(state => state.set);

  const onClick = (e: ThreeEvent<MouseEvent>) => {
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