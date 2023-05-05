import React from 'react';
import styled from 'styled-components';

import HexRing, { Wrapper as $HexRing } from '@html/common/svg/HexRing';
import Cassette, { Wrapper as $Cassette } from '@html/common/svg/Cassette';

export const Wrapper = styled.div`
  position: relative;
  pointer-events: auto;
  cursor: pointer;

  ${$HexRing} { height: 60px }

  ${$Cassette} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
  }
`;

export default () => {
  return (
    <Wrapper>
      <HexRing />
      <Cassette />
    </Wrapper>
  );
}
