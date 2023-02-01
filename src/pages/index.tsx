import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Outline } from '@react-three/postprocessing';

import HellfireClub from 'components/HellfireClub';
import useOutlineMeshStore from 'store/useOutlineMeshStore';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background: black;
`;

export default () => {
  const meshs = useOutlineMeshStore(state => state.meshs);

  return (
    <Wrapper>
      <Canvas>
        <OrbitControls />

        <ambientLight intensity={0.1} />


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