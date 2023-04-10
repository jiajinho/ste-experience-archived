import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { button, useControls } from 'leva';

import useCardEventStore from 'stores/html/useCardEventStore';
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
    transform: translate(-50%, 70%);
  }
`;

export default () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const theEncounter = useRef<HTMLDivElement>(null);
  const whenWhere = useRef<HTMLDivElement>(null);

  const event = useCardEventStore(state => state.event);
  const setCardEventStore = useCardEventStore(state => state.set);

  useAnimation(event, wrapper, theEncounter, whenWhere);

  const [flipEncounter, setFlipEncounter] = useState(false);
  const [flipWhenWhere, setFlipWhenWhere] = useState(false);

  useControls("test", {
    noEvent: button(() => setCardEventStore(undefined)),
    theEncounter: button(() => setCardEventStore('the-encounter')),
    whenWhere: button(() => setCardEventStore('when-where'))
  });

  const handleEncounterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFlipEncounter(!flipEncounter);
  }

  const handleWhenWhereClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFlipWhenWhere(!flipWhenWhere);
  }

  return (
    <Wrapper ref={wrapper} onClick={() => setCardEventStore(undefined)}>
      <Card.TheEncounter
        ref={theEncounter}
        flipped={flipEncounter}
        onClick={handleEncounterClick}
      />

      <Card.WhenWhere
        ref={whenWhere}
        flipped={flipWhenWhere}
        onClick={handleWhenWhereClick}
      />
    </Wrapper>
  )
}