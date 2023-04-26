import config from 'config';
import { Camera } from 'types';

import useCameraStore from 'stores/webgl/useCameraStore';
import useEnvStore from 'stores/useEnvStore';

export default (hotspot: Camera.Hotspot) => {
  const env = useEnvStore(state => state.env);
  const currentZoom = useCameraStore(state => state.currentZoom);
  const setCameraStore = useCameraStore(state => state.set);

  const triggerZoom = () => {
    if (env === "development") return;
    if (currentZoom === hotspot) return;

    if (env === "staging") {
      console.log(hotspot, {
        cameraPosition: config.zoomSettings[hotspot].cameraPosition,
        lookAt: config.zoomSettings[hotspot].lookAt
      });
    }

    setCameraStore("currentZoom", hotspot);
  }

  return triggerZoom;
}

