import { useEffect } from "react";

import useEnvStore from "stores/useEnvStore";
import useCameraStore from "stores/webgl/useCameraStore";
import useHoverHomeStore from "stores/webgl/useHoverHomeStore";
import useHoverHotspotStore from "stores/webgl/useHoverHotspotStore";

export default () => {
  const env = useEnvStore(state => state.env);
  const currentZoom = useCameraStore(state => state.currentZoom);

  const hoverHomeStore = useHoverHomeStore();
  const hoverHotspotStore = useHoverHotspotStore();

  useEffect(() => {
    if (env === "development") return;

    if (currentZoom === "default") {
      const values = Object.values(hoverHomeStore);

      for (const v of values) {
        if (typeof v === "boolean" && v) {
          document.body.style.cursor = "pointer";
          return;
        }
      }
    }
    else {
      const values = Object.values(hoverHotspotStore);

      for (const v of values) {
        if (typeof v === "boolean" && v) {
          document.body.style.cursor = "pointer";
          return;
        }
      }
    }

    document.body.style.cursor = "auto";
  }, [hoverHomeStore, hoverHotspotStore, env, currentZoom]);
}