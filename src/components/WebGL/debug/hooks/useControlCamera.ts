import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Object3D, Vector3 } from 'three';

import config from '@/config';
import useEnvStore from '@/stores/useEnvStore';
import useCameraStore from '@/stores/webgl/useCameraStore';
import useMouseEventStore from '@/stores/webgl/useMouseEventStore';

export default () => {
  const camera = useThree(state => state.camera);

  const env = useEnvStore(state => state.env);
  const setMouseEventStore = useMouseEventStore(state => state.set);

  useEffect(() => {
    const currentZoom = useCameraStore.getState().currentZoom;

    const mouseEvent = config.zoomSettings[currentZoom].allowEvent?.name;
    setMouseEventStore("event", env === "development" ? undefined : mouseEvent);

    if (env === "development") {
      camera.up = Object3D.DefaultUp;
      return;
    }

    const cameraSetting = config.zoomSettings[currentZoom];
    camera.up = cameraSetting.cameraUp || Object3D.DefaultUp;

    if (cameraSetting.cameraPosition) {
      camera.position.x = cameraSetting.cameraPosition[0];
      camera.position.y = cameraSetting.cameraPosition[1];
      camera.position.z = cameraSetting.cameraPosition[2];
    }

    if (cameraSetting.lookAt) {
      camera.lookAt(new Vector3(...cameraSetting.lookAt));
    }
  }, [env]);
}