import React, { useEffect } from 'react';

import { Bloom, EffectComposer, Outline } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';

import useEnvStore from 'stores/useEnvStore';
import useOutlineMeshStore from 'stores/webgl/useOutlineMeshStore';

export default () => {
  const env = useEnvStore(state => state.env);
  const outlineMeshes = useOutlineMeshStore(state => state.meshes);
  const setOutlineMeshStore = useOutlineMeshStore(state => state.set);

  useEffect(() => {
    if (env !== "development") return;
    setOutlineMeshStore([]);
  }, [env]);

  return (
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
        edgeStrength={0.7}
        kernelSize={KernelSize.LARGE}
        xRay={true}
        blur
      />
    </EffectComposer>
  )
}