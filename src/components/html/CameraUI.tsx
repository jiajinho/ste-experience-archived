import React from 'react';
import useCameraStore from 'store/useCameraStore';
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
  const goPrev = useCameraStore(state => state.goPrev);
  const goNext = useCameraStore(state => state.goNext);

  return (
    <Wrapper>
      <Caret
        id="left"
        direction="left"
        color="#CA1515"
        onClick={goPrev}
      />

      <Caret
        id="right"
        direction="right"
        color="#CA1515"
        onClick={goNext}
      />
    </Wrapper>
  )
}