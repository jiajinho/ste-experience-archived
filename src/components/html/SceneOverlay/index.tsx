import React from 'react';
import styled from 'styled-components';

import config from 'config';

import STEncounter, { Wrapper as $STEncounter } from '@html/STEncounter';
import TicketButton from './components/TicketButton';
import HomeButton from './components/HomeButton';
import Credit from './components/Credit';
import ArrowGroup from './components/ArrowGroup';

const Wrapper = styled.div`
  --color-bone: #FFEDC8;

  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 2;
  
  pointer-events: none;
  padding: 32px 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FlexRow = styled.div`
  position: relative;
  pointer-events: none;

  display: flex;
  justify-content: space-between;
  align-items: start;

  & > * { pointer-events: auto }

  ${$STEncounter} {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;

    p { font-size: 8px }
  }

  &#bottom {
    align-items: end;
  }

  @media screen and (min-width: ${config.viewport.md}) {
    ${$STEncounter} {
      width: 160px;

      p { font-size: 16px }
    }
  }
`;

export default () => {
  return (
    <Wrapper>
      <FlexRow>
        <HomeButton />
        <STEncounter />
        <TicketButton />
      </FlexRow>


      <FlexRow id="bottom">
        <ArrowGroup />
        <Credit />
      </FlexRow>
    </Wrapper>
  )
}