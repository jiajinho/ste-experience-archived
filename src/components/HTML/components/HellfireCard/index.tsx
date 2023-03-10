import React, { useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { HellfireCardPhase } from 'components/HTML/types';
import useAnimation from './useAnimation';

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

export default ({ phase, onFirstClick, onSecondClick }: {
  phase: HellfireCardPhase,
  onFirstClick?: () => void,
  onSecondClick?: () => void
}) => {
  const clicked = useRef(false);

  const card = useRef<HTMLDivElement>(null);
  const front = useRef<HTMLImageElement>(null);
  const back = useRef<HTMLImageElement>(null);

  useAnimation(phase, card, front, back);

  const handleClick = () => {
    if (clicked.current)
      onFirstClick && onFirstClick();
    else
      onSecondClick && onSecondClick();

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