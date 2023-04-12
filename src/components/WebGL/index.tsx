import { useEffect } from 'react';
import { useProgress } from '@react-three/drei';
import { Bloom, EffectComposer, Outline } from '@react-three/postprocessing';

import useOutlineMeshStore from 'stores/webgl/useOutlineMeshStore';
import useEnvStore from 'stores/useEnvStore';
import useLoadProgressStore from 'stores/useLoadProgressStore';
import useControlModel from '@webgl/debug/hooks/useControlModel';
import useControlSpotlight from '@webgl/debug/hooks/useControlSpotlight';
import useControlCamera from '@webgl/debug/hooks/useControlCamera';
import useRendererInfo from '@webgl/debug/hooks/useRendererInfo';

import HellfireClub from './HellfireClub';
import GlobalLight from './GlobalLight';
import Camera from './Camera';

export default () => {
  /**
   * Hooks
   */
  const env = useEnvStore(state => state.env);
  const outlineMeshes = useOutlineMeshStore(state => state.meshes);
  const setLoaderStore = useLoadProgressStore(state => state.set);

  const { total, loaded } = useProgress();

  useControlModel(true);
  useControlSpotlight(true);
  useControlCamera();
  useRendererInfo();

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

      <EffectComposer
        autoClear={false}
        multisampling={0}
        disableNormalPass={true}
        resolutionScale={0.6}
      >
        <Bloom
          luminanceThreshold={1}
          radius={0.5}
          intensity={0.6}
          luminanceSmoothing={0.5}
          mipmapBlur
        />
        <Outline
          selection={outlineMeshes}
          visibleEdgeColor={0xff0000}
          hiddenEdgeColor={0xffffff}
          edgeStrength={2.5}
          xRay={true}
        />
      </EffectComposer>
    </>
  );
}