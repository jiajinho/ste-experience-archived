import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

import HTML from 'components/HTML';
import WebGL from 'components/WebGL2';

const Wrapper = styled.main`
  position: relative;
  z-index: 1;

  height: 100vh;
  width: 100vw;
`;

export default () => {


  return (
    <Wrapper>
      <HTML />

      {/* <Canvas shadows style={{ zIndex: 1 }}>
        <WebGL />
      </Canvas> */}
    </Wrapper>
  )
}