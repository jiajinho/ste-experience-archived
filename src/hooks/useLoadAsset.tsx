import { useEffect } from "react";

import config from "config";
import { Asset } from "types";
import useAssetStore from "stores/html/useAssetStore";

export default () => {
  const incrementLoaded = useAssetStore(state => state.incrementLoaded);
  const setAssetStore = useAssetStore(state => state.set);

  useEffect(() => {
    for (const [k, v] of Object.entries(config.assetUrl.image)) {
      const image = new Image();
      image.src = v;

      image.onload = () => {
        setAssetStore(k as Asset.Image, true);
        incrementLoaded();
      }
    }
  }, []);
}