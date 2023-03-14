import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import useAnimation from './useAnimation';
import useLoadAnimationStore from 'store/html/useLoadAnimationStore';
import useLoaderStore from 'store/useLoaderStore';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  opacity: 0;
  visibility: hidden;
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
  /**
   * Hooks
   */
  const clicked = useRef(false);

  const phase = useLoadAnimationStore(state => state.card);
  const setLoadAnimateStore = useLoadAnimationStore(state => state.set);

  const setLoaderStore = useLoaderStore(state => state.set);

  const wrapper = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);

  const [frontLoaded, setFrontLoaded] = useState(false);
  const [backLoaded, setBackLoaded] = useState(false);

  useAnimation(wrapper, card);

  useEffect(() => {
    if (phase === "standby") {
      clicked.current = false;
    }
  }, [phase]);

  useEffect(() => {
    if (frontLoaded && backLoaded) {
      setLoaderStore("html", { card: true });
    }
  }, [frontLoaded, backLoaded]);

  /**
   * Not hook
   */
  const handleClick = () => {
    if (!clicked.current) {
      setLoadAnimateStore("card", "flip");
      clicked.current = true;
    }
    else {
      setLoadAnimateStore("card", "end");
    }
  }

  /**
   * Render
   */
  return (
    <Wrapper ref={wrapper}>
      <Card ref={card} onClick={handleClick}>
        <Image
          src="/static/texture/hellfire-card-front.png"
          alt="Card front invitation"
          onLoadingComplete={() => setFrontLoaded(true)}
          priority
          fill
        />

        <Image
          id="back"
          src="/static/texture/hellfire-card-back.png"
          alt="Card back enter club room"
          onLoadingComplete={() => setBackLoaded(true)}
          priority
          fill
        />
      </Card>
    </Wrapper>
  )
}