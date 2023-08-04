import React, { useEffect } from 'react';
import { Bloom, EffectComposer, Noise, Outline } from '@react-three/postprocessing';
import { KernelSize, BlendFunction } from 'postprocessing';

import useEnvStore from '@/stores/useEnvStore';
import useOutlineMeshStore from '@/stores/webgl/useOutlineMeshStore';

export default () => {
  const env = useEnvStore(state => state.env);
  const outlineMeshes = useOutlineMeshStore(state => state.meshes);
  const setOutlineMeshStore = useOutlineMeshStore(state => state.set);

  useEffect(() => {
    if (env === "development") {
      setOutlineMeshStore([]);
    }
  }, [env]);

  return (
    <EffectComposer
      autoClear={false}
      multisampling={0}
      disableNormalPass={true}
      resolutionScale={0.1}
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
        edgeStrength={env === "development" ? 2.5 : 1.5}
        kernelSize={env === "development" ? undefined : KernelSize.MEDIUM}
        xRay={env === "development" ? false : true}
        pulseSpeed={env === "development" ? 0 : 0.5}
        blur
      />
      <Noise
        premultiply // enables or disables noise premultiplication
        blendFunction={BlendFunction.ADD} // blend mode
        opacity={0.5}
      />
    </EffectComposer>
  )
}