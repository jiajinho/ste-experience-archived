import React from 'react';
import styled from 'styled-components';

import Arrow, { Wrapper as $Arrow } from '@html/svg/Arrow';
import useCameraStore from 'stores/webgl/useCameraStore';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  ${$Arrow} { pointer-events: auto }
`;

export default () => {
  const goNextZoom = useCameraStore(state => state.goNextZoom);
  const goPrevZoom = useCameraStore(state => state.goPrevZoom);


  return (
    <Wrapper>
      <Arrow left onClick={goPrevZoom} />
      <Arrow right onClick={goNextZoom} />
    </Wrapper>
  );
}