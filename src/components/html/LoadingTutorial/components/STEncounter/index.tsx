import React, { useRef } from 'react';
import styled from 'styled-components';

import config from '@/config';
import useAnimation from './useAnimation';

import STEncounter, { Wrapper as $STEncounter } from '@html/common/STEncounter';
import TicketButton, { Wrapper as $TicketButton } from '@/components/html/common/TicketButton';

const Wrapper = styled.div`
  ${$STEncounter} {
    --width: max(100px, 16vmin);
    
    position: fixed;
    top: 32px;
    left: 50%;
    transform: translateX(-50%);
  }

  ${$TicketButton} {
    position: fixed;
    top: 32px;
    right: 16px;
  }

  @media screen and (min-width: ${config.viewport.md}) {
    ${$STEncounter} {
      top: 36px;
    }

    ${$TicketButton} {
      top: 36px;
      right: 40px;
    }
  }
`;

export default () => {
  const wrapper = useRef<HTMLDivElement>(null);

  useAnimation(wrapper);

  return (
    <Wrapper ref={wrapper}>
      <STEncounter />
      <TicketButton />
    </Wrapper>
  );
}