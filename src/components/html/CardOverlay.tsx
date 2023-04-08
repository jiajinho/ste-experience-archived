import React, { useState } from 'react';
import styled from 'styled-components';

import Card from '@html/common/Card';

const Wrapper = styled.div`
  background: #000a;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 10;
`;

export default () => {
  const [flipA, setFlipA] = useState(false);
  const [flipB, setFlipB] = useState(false);

  return (
    <Wrapper>
      <Card.TheEncounter
        flipped={flipA}
        onClick={() => setFlipA(!flipA)}
      />

      <Card.WhenWhere
        flipped={flipB}
        onClick={() => setFlipB(!flipB)}
      />
    </Wrapper>
  )
}