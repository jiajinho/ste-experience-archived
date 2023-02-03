import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

import useCameraStore from 'store/useCameraStore';
import { Vector3 } from 'three';

export default () => {
  const { camera } = useThree();
  const data = useCameraStore(state => state.data);

  useEffect(() => {
    camera.position.x = data.position[0];
    camera.position.y = data.position[1];
    camera.position.z = data.position[2];

    const lookAt = new Vector3(...data.lookAt);
    camera.lookAt(lookAt);
  }, [data]);
}