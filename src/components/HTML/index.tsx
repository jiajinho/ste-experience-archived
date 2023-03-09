import React from 'react';
import styled from 'styled-components';

import ProgressNumber from './components/ProgressNumber';

const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  height: 100%;
  width: 100%;

  background: #ccc;
`;

export default () => {
  return (
    <Wrapper>
      <ProgressNumber data={10} />
    </Wrapper>
  )
}