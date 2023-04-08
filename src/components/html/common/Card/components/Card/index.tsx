import React, { useRef } from 'react';
import styled from 'styled-components';
import useAnimation from './useAnimation';

export const Wrapper = styled.div`
  display: inline-block;
  perspective: 1000px;
`;

const Container = styled.div`
  position: relative;
  aspect-ratio: 2/3;
  height: 500px;
  width: auto;

  cursor: pointer;
  transform-style: preserve-3d;

  & > * {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  & > *.front { backface-visibility: hidden }
  & > *.back { transform: rotateY(180deg) }
`;

export default ({ children, flipped = false, onClick }: {
  children: [JSX.Element, JSX.Element],
  flipped?: boolean,
  onClick?: () => void
}) => {
  const container = useRef<HTMLDivElement>(null);

  useAnimation(flipped, container);

  return (
    <Wrapper onClick={onClick}>
      <Container ref={container}>
        {children}
      </Container>
    </Wrapper>
  );
}