import styled from 'styled-components';
import { Canvas as Canvas3 } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { EffectComposer, Outline } from '@react-three/postprocessing';

import useOutlineMeshStore from 'store/useOutlineMeshStore';
import HellfireClub from 'components/webgl/HellfireClub';
import LightGroup from 'components/webgl/LightGroup';
import CameraGroup from 'components/webgl/CameraGroup';
import CameraUI from 'components/html/CameraUI';

const RedDot = styled.div`
  background: red;
  border-radius: 50%;
  aspect-ratio: 1/1;
  height: 5px;
  width: auto;
`;

const Wrapper = styled.main`
  position: relative;
  z-index: 1;

  height: 100vh;
  width: 100vw;
  background: black;
`;

const Canvas = styled(Canvas3)`
  z-index: 1;
`;

export default () => {
  const meshs = useOutlineMeshStore(state => state.meshs);

  return (
    <Wrapper>
      <CameraUI />

      <Canvas>
        <OrbitControls />

        <LightGroup />
        <CameraGroup />
        <HellfireClub scale={0.01} />

        <Html occlude={false} position={[11.2, 4.4, -6.4]}>
          <RedDot />
        </Html>

        <Html occlude={false} position={[-5.3, 6.2, 12.8]}>
          <RedDot />
        </Html>

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