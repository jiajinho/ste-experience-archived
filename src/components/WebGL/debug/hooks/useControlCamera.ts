import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { useControls } from 'leva';

import config from 'config';
import useEnvStore from 'stores/useEnvStore';
import useCameraStore from 'stores/webgl/useCameraStore';
import useDebugCameraStore from 'stores/webgl/useDebugCameraStore';

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



  const debug = {
    box: useDebugCameraStore(state => state.box),
    target: useDebugCameraStore(state => state.target),
  }

  const [{ x, y, z, tx, ty, tz }, set] = useControls("useControlCamera", () => ({
    x: { min: -5, max: 5, value: 0, step: 0.01 },
    y: { min: -5, max: 5, value: 0, step: 0.01 },
    z: { min: -5, max: 5, value: 0, step: 0.01 },
    tx: { min: -100, max: 100, value: 0, step: 0.01 },
    ty: { min: -100, max: 100, value: 0, step: 0.01 },
    tz: { min: -100, max: 100, value: 0, step: 0.01 },
  }));

  useEffect(() => {
    if (!debug.box) return;
    if (!debug.target) return;

    set({
      x: debug.box.position.x,
      y: debug.box.position.y,
      z: debug.box.position.z,
      tx: debug.target.position.x,
      ty: debug.target.position.y,
      tz: debug.target.position.z,
    });
  }, [debug.box, debug.target]);

  useEffect(() => {
    if (!debug.box) return;
    debug.box.position.set(x, y, z);
  }, [x, y, z]);

  useEffect(() => {
    if (!debug.target) return;

    debug.target.position.set(tx, ty, tz);
  }, [tx, ty, tz]);
}