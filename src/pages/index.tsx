import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


import HellfireClub from 'components/HellfireClub';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
`;

export default () => {

  return (
    <Wrapper>
      <Canvas>
        <OrbitControls />

        <ambientLight intensity={0.2} />


        <HellfireClub scale={0.01} />
      </Canvas>
    </Wrapper>
  );
}