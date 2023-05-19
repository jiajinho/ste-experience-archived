import { useEffect } from "react";

import config from "config";
import { Merch } from "types";
import useLoadProgressStore from "stores/useLoadProgressStore";

export default () => {
  const setLoadProgressStore = useLoadProgressStore(state => state.set);

  useEffect(() => {
    for (const [k, v] of Object.entries(config.assetUrl.image)) {
      const image = new Image();
      image.src = v;

      image.onload = () => {
        setLoadProgressStore("html", { [k as Merch]: true });
      }
    }
  }, []);
}