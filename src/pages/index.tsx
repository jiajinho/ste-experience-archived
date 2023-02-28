import { Bloom, EffectComposer, Outline } from '@react-three/postprocessing';

import useOutlineMeshStore from 'store/useOutlineMeshStore';

import HellfireClub from 'components/webgl/HellfireClub';
import useLevaMover from 'hooks/useLevaMover';
import Camera from 'components/webgl/Camera';
import Lights from 'components/webgl/Lights';

export default () => {
  const outlineMeshs = useOutlineMeshStore(state => state.meshes);

  useLevaMover();

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
          radius={0.8}
          intensity={0.8}
          luminanceSmoothing={0}
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