import { useThree } from '@react-three/fiber';
import useEnvStore from 'stores/useEnvStore';

export default () => {
  const env = useEnvStore(state => state.env);
  const gl = useThree(state => state.gl);

  if (env === 'development') {
    console.log(gl.info);
  }
}