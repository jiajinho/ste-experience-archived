import { useEffect } from "react";

import useEnvStore from "stores/useEnvStore";
import useCameraStore from "stores/webgl/useCameraStore";
import useHoverHomeStore from "stores/webgl/useHoverHomeStore";
import useHoverHotspotStore from "stores/webgl/useHoverHotspotStore";

export default () => {
  const env = useEnvStore(state => state.env);

  useEffect(() => {
    if (env === "development") {
      document.body.style.cursor = "auto";
      return;
    }

    function setCursor(values: any[]) {
      for (const v of values) {
        if (typeof v === "boolean" && v) {
          document.body.style.cursor = "pointer";
          return;
        }
      }

      document.body.style.cursor = "auto";
    }

    const unsubHoverHome = useHoverHomeStore.subscribe(state => {
      const currentZoom = useCameraStore.getState().currentZoom;

      if (currentZoom !== "default") return;

      const values = Object.values(state);
      setCursor(values);
    });

    const unsubHoverHotspot = useHoverHotspotStore.subscribe(state => {
      const currentZoom = useCameraStore.getState().currentZoom;

      if (currentZoom === "default") return;

      const values = Object.values(state);
      setCursor(values);
    });

    return () => {
      unsubHoverHome();
      unsubHoverHotspot();
    }
  }, [env]);
}