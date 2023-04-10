import React, { useRef } from 'react';
import styled from 'styled-components';
import { button, useControls } from 'leva';

import useCardStore from 'stores/html/useCardStore';
import useAnimation from './useAnimation';
import Card, { Wrapper as $Card } from '@html/common/Card';

const Wrapper = styled.div`
  background: #000a;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 10;

  ${$Card} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const theEncounter = useRef<HTMLDivElement>(null);
  const whenWhere = useRef<HTMLDivElement>(null);

  const flippedEncounter = useCardStore(state => state.flippedEncounter);
  const flippedWhenWhere = useCardStore(state => state.flippedWhenWhere);
  const setCardStore = useCardStore(state => state.set);

  useAnimation(wrapper, theEncounter, whenWhere);

  const handleEncounterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCardStore('flippedEncounter', !flippedEncounter);
  }

  const handleWhenWhereClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCardStore('flippedWhenWhere', !flippedWhenWhere);
  }

  return (
    <Wrapper
      ref={wrapper}
      onClick={() => setCardStore('htmlEvent', undefined)}
    >
      <Card.TheEncounter
        ref={theEncounter}
        flipped={flippedEncounter}
        onClick={handleEncounterClick}
      />

      <Card.WhenWhere
        ref={whenWhere}
        flipped={flippedWhenWhere}
        onClick={handleWhenWhereClick}
      />
    </Wrapper>
  )
}