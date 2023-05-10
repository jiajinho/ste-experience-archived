import { Asset } from 'types';
import useCardStore from 'stores/html/useCardStore';
import useCameraStore from 'stores/webgl/useCameraStore';

export default (merch: Asset.Merch, triggerZoom: () => void) => {
  const currentZoom = useCameraStore(state => state.currentZoom);

  const set = useCardStore(state => state.set);

  const onClick = () => {
    if (currentZoom !== "shelf") {
      triggerZoom();
    }
    else {
      set("merch", merch);
      set("htmlEvent", "merch");
    }
  }

  return { onClick }
}