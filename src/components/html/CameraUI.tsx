import React from 'react';
import styled from 'styled-components';

import Caret, { Wrapper as $Caret } from './Caret';

const Wrapper = styled.div`
  ${$Caret} {
    position: fixed;
    z-index: 2;
    top: 50%;

    transform: translateY(-50%);
  }

  ${$Caret}#right {
    right: 0;
  }
`;

export default () => {
  return (
    <Wrapper>
      <Caret
        id="left"
        direction="left"
        color="#CA1515"
      />

      <Caret
        id="right"
        direction="right"
        color="#CA1515"
      />
    </Wrapper>
  )
}