import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

export default () => {
  const gl = useThree(state => state.gl);

  useEffect(() => {
    gl.shadowMap.autoUpdate = false;
    gl.shadowMap.needsUpdate = true;
  }, []);
}