import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { useControls } from 'leva';

import useCameraSwitchStore from 'store/useCameraSwitchStore';

export default () => {
  const { camera } = useThree();
  const data = useCameraSwitchStore(state => state.data);

  const { rx, ry, rz } = useControls({
    rx: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    ry: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    rz: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
  });

  useEffect(() => {
    camera.rotation.x = rx;
    camera.rotation.y = ry;
    camera.rotation.z = rz;
  }, [rx, ry, rz]);


  useEffect(() => {
    camera.position.x = data.position[0];
    camera.position.y = data.position[1];
    camera.position.z = data.position[2];

    camera.rotation.x = data.rotation[0];
    camera.rotation.y = data.rotation[1];
    camera.rotation.z = data.rotation[2];
  }, [data]);

  useEffect(() => {
    console.log("camera position", camera.position);
  }, [camera.position.x, camera.position.y, camera.position.z]);
}