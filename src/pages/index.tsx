import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Outline } from '@react-three/postprocessing';
import { useControls } from 'leva';

import useOutlineMeshStore from 'store/useOutlineMeshStore';
import HellfireClub from 'components/HellfireClub';
import Lights from 'components/Lights';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background: black;
`;

export default () => {
  const meshs = useOutlineMeshStore(state => state.meshs);

  const { intensity } = useControls({
    intensity: { min: 0, max: 0.1, step: 0.01, value: 0.05 }
  })


  return (
    <Wrapper>
      <Canvas>
        <OrbitControls />

        <ambientLight intensity={intensity} />
        <Lights />

        <HellfireClub scale={0.01} />

        <EffectComposer enabled autoClear={false}>
          <Outline
            selection={meshs}
            hiddenEdgeColor={0x99c4ac}
            edgeStrength={2.5}
            xRay={true}
          />
        </EffectComposer>
      </Canvas>
    </Wrapper>
  );
}