import React from 'react';
import styled from 'styled-components';

import Arrow, { Wrapper as $Arrow } from '@html/svg/Arrow';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  ${$Arrow} { pointer-events: auto }
`;

export default () => {

  return (
    <Wrapper>
      <Arrow left />

      <Arrow right />
    </Wrapper>
  );
}