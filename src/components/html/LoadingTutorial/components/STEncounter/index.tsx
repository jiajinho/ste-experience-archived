import React, { useRef } from 'react';
import styled from 'styled-components';

import useAnimation from './useAnimation';
import STEncounter, { Wrapper as $STEncounter } from '@html/common/STEncounter';

const Wrapper = styled.div`
  ${$STEncounter} {
    --width: max(100px, 15vmin);
    
    position: fixed;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default () => {
  const wrapper = useRef<HTMLDivElement>(null);

  useAnimation(wrapper);

  return (
    <Wrapper>
      <STEncounter ref={wrapper} />
    </Wrapper>
  );
}