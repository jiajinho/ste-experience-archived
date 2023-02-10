import styled from 'styled-components';
import { Html, OrbitControls } from '@react-three/drei';
import { Bloom, EffectComposer, Outline } from '@react-three/postprocessing';
import { useControls } from 'leva';

import useOutlineMeshStore from 'store/useOutlineMeshStore';
import useCamera from 'hooks/useCamera';

import HellfireClub from 'components/webgl/HellfireClub';
import useObjectMover from 'hooks/useObjectMover';

export default () => {
  const outlineMesh = useOutlineMeshStore(state => state.mesh);

  // useCamera();
  useObjectMover();


  const { radius, intensity, smoothing, x, y, z } = useControls({
    radius: { min: 0, max: 2, value: 0, step: 0.1 },
    intensity: { min: 0, max: 100, value: 1, step: 1 },
    smoothing: { min: 0, max: 1, value: 0, step: 0.1 },
    x: { min: -10, max: 10, step: 0.1, value: 0 },
    y: { min: -10, max: 10, step: 0.1, value: 0 },
    z: { min: -10, max: 10, step: 0.1, value: 0 },
  });

  return (
    <>
      <OrbitControls />

      <spotLight position={[10, 10, 0]} />
      <spotLight position={[0, 10, 10]} />
      <spotLight position={[0, 20, 0]} />
      <ambientLight intensity={0.75} />

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