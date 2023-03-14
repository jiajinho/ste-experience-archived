import { Bloom, EffectComposer, Outline } from '@react-three/postprocessing';

import useOutlineMeshStore from 'store/useOutlineMeshStore';

import useEnvStore from 'store/useEnvStore';
import useDebugModel from 'hooks/useDebugModel';
import useDebugLight from 'hooks/useDebugLight';
import useLoaderStore from 'store/useLoaderStore';

import HellfireClub from './HellfireClub';
import Camera from './Camera';
import Lights from './Lights';
import { useProgress } from '@react-three/drei';
import { useEffect } from 'react';

export default () => {
  const env = useEnvStore(state => state.env);
  const outlineMeshes = useOutlineMeshStore(state => state.meshes);
  const setLoaderStore = useLoaderStore(state => state.set);

  useDebugModel(true);
  useDebugLight(true);

  const { total, loaded } = useProgress();

  useEffect(() => {
    setLoaderStore("webgl", {
      total,
      loaded
    });
  }, [total, loaded]);

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