import styled from 'styled-components';
import { Html, OrbitControls } from '@react-three/drei';
import { Bloom, EffectComposer, Outline } from '@react-three/postprocessing';

import useOutlineMeshStore from 'store/useOutlineMeshStore';
import useCameraSwitch from 'hooks/useCameraSwitch';

import HellfireClub from 'components/webgl/HellfireClub';
import useLevaMover from 'hooks/useLevaMover';
import useZoomAnimation from 'hooks/useZoomAnimation';
import { useControls } from 'leva';

export default () => {
  const outlineMeshs = useOutlineMeshStore(state => state.meshes);

  useCameraSwitch();
  useZoomAnimation();
  useLevaMover();

  const { radius, intensity } = useControls("bloom", {
    radius: { min: 0, max: 3, step: 0.1, value: 0.6 },
    intensity: { min: 0, max: 10, step: 0.1, value: 1 }
  });

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