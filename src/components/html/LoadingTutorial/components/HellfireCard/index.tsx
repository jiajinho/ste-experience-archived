import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import api from '@/api';
import { MixpanelEvent } from '@/api/mixpanel';

import useAnimation from './useAnimation';
import useLoadAnimationStore from '@/stores/html/useLoadAnimationStore';
import Card, { Wrapper as $Card } from '@html/common/Card';

const Wrapper = styled.div`
  ${$Card} {
    position: fixed;
    top: 200vh;
    left: 50%;

    transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
  }
`;

export default () => {
  const phase = useLoadAnimationStore(state => state.card);
  const setLoadAnimateStore = useLoadAnimationStore(state => state.set);

  const clicked = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useAnimation(ref);

  useEffect(() => {
    if (phase === "standby") {
      clicked.current = false;
    }
  }, [phase]);

  const handleClick = () => {
    if (!clicked.current) {
      setLoadAnimateStore("card", "flip");
      clicked.current = true;

      api.mixpanel(MixpanelEvent.ACCEPT_INVITE);
    }
    else {
      setLoadAnimateStore("card", "end");

      api.mixpanel(MixpanelEvent.ENTER_CLUBROOM);
    }
  }

  return (
    <Wrapper>
      <Card.Hellfire
        ref={ref}
        flipped={phase === 'flip' || phase === 'end'}
        onClick={handleClick}
      />
    </Wrapper>
  )
}