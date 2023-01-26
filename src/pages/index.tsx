import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import useAudio from 'hooks/useAudio';
import HellfireClub from 'components/HellfireClub';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
`;

export default () => {
  useAudio("/static/ste-theme.wav");


  return (
    <Wrapper>
      <Canvas>
        <OrbitControls />

        <ambientLight intensity={0.2} />


        <HellfireClub />
      </Canvas>
    </Wrapper>
  );
}