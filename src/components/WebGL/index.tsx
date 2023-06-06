import useEnvStore from '@/stores/useEnvStore';
import useControlCamera from '@webgl/debug/hooks/useControlCamera';
import useGLRenderer from '@webgl/hooks/useGLRenderer';
import useCalibrateFPS from '@webgl/hooks/useCalibrateFPS';
import useFrameloop from './hooks/useFrameloop';

import HellfireClub from './HellfireClub';
import GlobalLight from './GlobalLight';
import Camera from './Camera';
import Postprocessing from './Postprocessing';

export default () => {
  /**
   * Hooks
   */
  const env = useEnvStore(state => state.env);

  useControlCamera();
  useGLRenderer();
  useCalibrateFPS();
  useFrameloop();

  /**
   * Render
   */
  return (
    <>
      {env === "development" && <axesHelper args={[1]} />}

      <HellfireClub />
      <Camera />
      <GlobalLight />

      <Postprocessing />
    </>
  );
}