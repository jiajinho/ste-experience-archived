import { useEffect, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';

import useCameraStore from '@/stores/webgl/useCameraStore';
import useEnvStore from '@/stores/useEnvStore';
import useControlCamera from '@webgl/debug/hooks/useControlCamera';

import useZoomHotspot from './useZoomHotspot';
import useMouseEvent from './useMouseEvent';

export default () => {
  const shadowCamera = useRef<THREE.PerspectiveCamera>(null);

  const env = useEnvStore(state => state.env);
  const setCameraStore = useCameraStore(state => state.set);

  useMouseEvent();
  useZoomHotspot();
  useControlCamera();

  useEffect(() => {
    if (!shadowCamera.current) return;

    setCameraStore("shadowCamera", shadowCamera.current);
  }, []);

  return (
    <>
      <perspectiveCamera ref={shadowCamera} />

      <OrbitControls
        enabled={env === "development"}
        enableDamping={false}
      />
    </>
  )
}