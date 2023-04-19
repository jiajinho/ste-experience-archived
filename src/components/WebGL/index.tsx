import { useEffect } from 'react';
import { useProgress } from '@react-three/drei';

import useEnvStore from 'stores/useEnvStore';
import useLoadProgressStore from 'stores/useLoadProgressStore';
import useControlModel from '@webgl/debug/hooks/useControlModel';
import useControlSpotlight from '@webgl/debug/hooks/useControlSpotlight';
import useControlCamera from '@webgl/debug/hooks/useControlCamera';
import useGLRenderer from '@webgl/useGLRenderer';
import useCalibrateFPS from '@webgl/useCalibrateFPS';

import HellfireClub from './HellfireClub';
import GlobalLight from './GlobalLight';
import Camera from './Camera';
import Postprocessing from './Postprocessing';

export default () => {
  /**
   * Hooks
   */
  const env = useEnvStore(state => state.env);
  const setLoaderStore = useLoadProgressStore(state => state.set);

  const { total, loaded } = useProgress();

  useControlModel(true);
  useControlSpotlight(true);
  useControlCamera();
  useGLRenderer();
  useCalibrateFPS();

  useEffect(() => {
    setLoaderStore("webgl", {
      total,
      loaded
    });
  }, [total, loaded, setLoaderStore]);

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