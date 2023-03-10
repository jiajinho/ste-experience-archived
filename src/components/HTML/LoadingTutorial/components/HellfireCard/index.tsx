import React, { useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import useAnimation from './useAnimation';
import useLoadingPhaseStore from 'store/html/useLoadingPhaseStore';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  perspective: 1000px;
`;

const Card = styled.div`
  aspect-ratio: 2/3;
  height: 500px;
  width: auto;

  cursor: pointer;
  transform-style: preserve-3d;

  img { backface-visibility: hidden }
  img#back { transform: rotateY(180deg) }
`;

export default () => {
  const clicked = useRef(true);
  const set = useLoadingPhaseStore(state => state.set);

  const card = useRef<HTMLDivElement>(null);
  const front = useRef<HTMLImageElement>(null);
  const back = useRef<HTMLImageElement>(null);

  useAnimation(card);

  const handleClick = () => {
    clicked.current ? set("card", "flip") : set("card", "end");
    clicked.current = !clicked.current;
  }

  return (
    <Wrapper>
      <Card
        ref={card}
        onClick={handleClick}
      >
        <Image
          ref={front}
          src="/static/texture/hellfire-card-front.png"
          alt="Card front invitation"
          fill
        />

        <Image
          ref={back}
          id="back"
          src="/static/texture/hellfire-card-back.png"
          alt="Card back enter club room"
          fill
        />
      </Card>
    </Wrapper>
  )
}