import styled from 'styled-components';
import { Html, OrbitControls } from '@react-three/drei';
import { EffectComposer, Outline } from '@react-three/postprocessing';
import { useControls } from 'leva';

import useOutlineMeshStore from 'store/useOutlineMeshStore';
import useCamera from 'hooks/useCamera';

import HellfireClub from 'components/webgl/HellfireClub';

export default () => {
  useCamera();

  const meshs = useOutlineMeshStore(state => state.meshs);

  return (
    <>
      <OrbitControls />

      {/* <spotLight position={[5, 5, 5]} />
      <ambientLight intensity={0.5} /> */}

      <HellfireClub />

      <EffectComposer enabled autoClear={false}>
        <Outline
          selection={meshs}
          hiddenEdgeColor={0x99c4ac}
          edgeStrength={2.5}
          xRay={true}
        />
      </EffectComposer>
    </>
  );
}