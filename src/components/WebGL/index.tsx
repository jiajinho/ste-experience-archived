import { useEffect } from 'react';
import { useProgress } from '@react-three/drei';
import { Bloom, EffectComposer, Outline } from '@react-three/postprocessing';

import useOutlineMeshStore from 'stores/webgl/useOutlineMeshStore';
import useEnvStore from 'stores/useEnvStore';
import useLoadProgressStore from 'stores/useLoadProgressStore';
import useCameraStore from 'stores/webgl/useCameraStore';

import useControlGroup from '@webgl/debug/hooks/useControlGroup';
import useControlSpotlight from '@webgl/debug/hooks/useControlSpotlight';

import HellfireClub from './HellfireClub';
import Camera from './Camera';
import Lights from './Lights';

export default () => {
  /**
   * Hooks
   */
  const env = useEnvStore(state => state.env);
  const outlineMeshes = useOutlineMeshStore(state => state.meshes);
  const setLoaderStore = useLoadProgressStore(state => state.set);

  const { total, loaded } = useProgress();

  useControlGroup(true);
  useControlSpotlight(true);

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
      <Lights />

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