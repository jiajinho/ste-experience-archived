import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import useEnvStore from 'stores/useEnvStore';
import { useControls } from 'leva';

export default () => {
  const env = useEnvStore(state => state.env);
  const gl = useThree(state => state.gl);

  const { glInfo } = useControls("log", {
    glInfo: false
  }, {
    collapsed: true
  });

  useEffect(() => {
    gl.shadowMap.autoUpdate = false;
    gl.shadowMap.needsUpdate = true;
  }, []);

  if (glInfo && env === 'development') {
    console.log(gl.info);
  }
}