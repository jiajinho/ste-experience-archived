import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import useAnimation from './useAnimation';
import useLoadingPhaseStore from 'store/html/useLoadingPhaseStore';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  perspective: 1000px;
`;

const Card = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);

  aspect-ratio: 2/3;
  height: 500px;
  width: auto;

  cursor: pointer;
  transform-style: preserve-3d;

  img { backface-visibility: hidden }
  img#back { transform: rotateY(180deg) }
`;

export default () => {
  const clicked = useRef(false);

  const phase = useLoadingPhaseStore(state => state.card);
  const set = useLoadingPhaseStore(state => state.set);

  const card = useRef<HTMLDivElement>(null);
  const front = useRef<HTMLImageElement>(null);
  const back = useRef<HTMLImageElement>(null);

  useAnimation(card);

  useEffect(() => {
    if (phase === "standby") {
      clicked.current = false;
    }
  }, [phase]);

  const handleClick = () => {
    if (!clicked.current) {
      set("card", "flip");
      clicked.current = true;
    }
    else {
      set("card", "end");
    }
  }

  return (
    <Wrapper>
      <Card
        ref={card}
        onClick={handleClick}
      >
        <Image
          ref={front}
          src="/static/texture/hellfirecard-front.png"
          alt="Card front invitation"
          sizes="100vw"
          fill
        />

        <Image
          ref={back}
          id="back"
          src="/static/texture/hellfirecard-back.png"
          alt="Card back enter club room"
          sizes="100vw"
          fill
        />
      </Card>
    </Wrapper>
  )
}