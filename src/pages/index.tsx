import { Bloom, EffectComposer, Outline } from '@react-three/postprocessing';

import useOutlineMeshStore from 'store/useOutlineMeshStore';

import useLevaMover from 'hooks/useLevaMover';
import useDebugLight from 'hooks/useDebugLight';

import HellfireClub from 'components/webgl/HellfireClub';
import Camera from 'components/webgl/Camera';
import Lights from 'components/webgl/Lights';

export default () => {
  const outlineMeshs = useOutlineMeshStore(state => state.meshes);

  useLevaMover();
  useDebugLight(false);

  return (
    <>
      <axesHelper args={[1]} />

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
          selection={outlineMeshs}
          visibleEdgeColor={0xff0000}
          hiddenEdgeColor={0xffffff}
          edgeStrength={2.5}
          xRay={true}
        />
      </EffectComposer>
    </>
  );
}