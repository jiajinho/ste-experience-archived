import styled from 'styled-components';
import { Html, OrbitControls } from '@react-three/drei';
import { Bloom, EffectComposer, Outline } from '@react-three/postprocessing';

import useOutlineMeshStore from 'store/useOutlineMeshStore';
import useCameraSwitch from 'hooks/useCameraSwitch';

import HellfireClub from 'components/webgl/HellfireClub';
import useLevaMover from 'hooks/useLevaMover';
import useZoomAnimation from 'hooks/useZoomAnimation';

export default () => {
  const outlineMeshs = useOutlineMeshStore(state => state.meshes);

  useCameraSwitch();
  useZoomAnimation();
  useLevaMover();

  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.4} />
      <spotLight position={[20, 20, 20]} intensity={0.3} />
      <spotLight position={[-20, 20, 20]} intensity={0.3} />
      <directionalLight color={0xffffff} intensity={0.5} />

      <axesHelper args={[5]} />

      <HellfireClub />

      <EffectComposer
        autoClear={false}
        multisampling={0}
        disableNormalPass={true}
        resolutionScale={0.6}
      >
        {/* <Bloom
          luminanceThreshold={1}
          radius={0.6}
          intensity={1}
          luminanceSmoothing={0}
          mipmapBlur
        /> */}
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