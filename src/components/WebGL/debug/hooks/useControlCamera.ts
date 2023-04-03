import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

import config from 'config';
import useEnvStore from 'stores/useEnvStore';
import useCameraStore from 'stores/webgl/useCameraStore';

export default () => {
  const camera = useThree(state => state.camera);

  const env = useEnvStore(state => state.env);
  const currentZoom = useCameraStore(state => state.currentZoom);
  const setCameraStore = useCameraStore(state => state.set);

  useEffect(() => {
    const mouseEvent = config.zoomSettings[currentZoom].allowEvent?.name;
    setCameraStore("mouseEvent", env === "development" ? undefined : mouseEvent);

    if (env === "development") return;

    const cameraSetting = config.zoomSettings[currentZoom];

    if (cameraSetting.cameraPosition) {
      camera.position.x = cameraSetting.cameraPosition[0];
      camera.position.y = cameraSetting.cameraPosition[1];
      camera.position.z = cameraSetting.cameraPosition[2];
    }

    if (cameraSetting.lookAt) {
      camera.lookAt(cameraSetting.lookAt);
    }
  }, [env]);


}