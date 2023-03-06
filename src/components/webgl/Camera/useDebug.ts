import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import useEnvStore from 'store/useEnvStore';

export default () => {
  const env = useEnvStore(state => state.env);
  const camera = useThree(state => state.camera);

  const { rx, ry, rz, x, y, z, freeCam } = useControls("useDebugCamera", {
    rx: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    ry: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    rz: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    x: { min: -20, max: 20, step: 0.01, value: 0 },
    y: { min: -20, max: 20, step: 0.01, value: 0 },
    z: { min: -20, max: 20, step: 0.01, value: 0 },
    freeCam: env === "development"
  }, {
    collapsed: true
  });

  useEffect(() => {
    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;

    camera.rotation.x = rx;
    camera.rotation.y = ry;
    camera.rotation.z = rz;
  }, [rx, ry, rz, x, y, z]);

  return freeCam;
}