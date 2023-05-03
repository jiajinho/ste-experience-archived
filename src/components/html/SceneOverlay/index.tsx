import React from 'react';
import styled from 'styled-components';

import config from 'config';
import useViewportStore from 'stores/useViewportStore';

import STEncounter, { Wrapper as $STEncounter } from '@html/common/STEncounter';
import ArrowGroup, { Wrapper as $ArrowGroup } from './components/ArrowGroup';
import TicketButton from './components/TicketButton';
import HomeButton from './components/HomeButton';
import Credit from './components/Credit';

const Wrapper = styled.div`
  --color-bone: #FFEDC8;

  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 10;
  
  pointer-events: none;
  padding: 32px 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  & > ${$ArrowGroup} { justify-content: space-between }

  @media screen and (min-width: ${config.viewport.md}) {
    padding: 36px 40px;
  }
`;

const TopRow = styled.div`
  position: relative;
  pointer-events: none;

  display: flex;
  justify-content: space-between;
  align-items: start;

  ${$STEncounter} {
    --width: max(100px, 15vmin);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const BottomRow = styled(TopRow)`
  align-items: end;

  @media screen and (min-width: ${config.viewport.md}) {
    justify-content: end;
  }
`;

export default () => {
  const md = useViewportStore(state => state.md);

  return (
    <Wrapper>
      <TopRow>
        <HomeButton />
        <STEncounter />
        <TicketButton />
      </TopRow>

      {md && <ArrowGroup />}

      <BottomRow>
        {!md && <ArrowGroup />}
        <Credit />
      </BottomRow>
    </Wrapper>
  )
}