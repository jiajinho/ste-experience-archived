import styled from 'styled-components';
import { Html, OrbitControls } from '@react-three/drei';
import { Bloom, EffectComposer, Outline } from '@react-three/postprocessing';
import { useControls } from 'leva';

import useOutlineMeshStore from 'store/useOutlineMeshStore';
import useCameraSwitch from 'hooks/useCameraSwitch';

import HellfireClub from 'components/webgl/HellfireClub';
import useLevaMover from 'hooks/useLevaMover';
import useZoomAnimation from 'hooks/useZoomAnimation';

export default () => {
  const outlineMesh = useOutlineMeshStore(state => state.mesh);

  useCameraSwitch();
  useZoomAnimation();
  useLevaMover();


  const { freeCam } = useControls({
    freeCam: false
  })

  return (
    <>
      <OrbitControls />

      <ambientLight intensity={1} />
      <spotLight position={[15, 10, 15]} intensity={0.5} />
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
          selection={outlineMesh ? [outlineMesh] : []}
          visibleEdgeColor={0xff0000}
          hiddenEdgeColor={0xffffff}
          edgeStrength={2.5}
          xRay={true}
        />
      </EffectComposer>
    </>
  );
}