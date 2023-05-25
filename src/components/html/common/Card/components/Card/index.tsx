import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { IntrinsicHTML } from 'types';
import useAnimation from './useAnimation';

export const Wrapper = styled.div(({ $width }: {
  $width: number
}) => `
  --card-width: ${$width}px;

  display: inline-block;
  perspective: 1000px;
  user-select: none;
`);

const Container = styled.div`
  position: relative;
  aspect-ratio: 2/3;
  height: auto;
  width: 80vw;
  max-width: 55vh;

  cursor: pointer;
  transform-style: preserve-3d;

  @media screen and (min-aspect-ratio: 11/10) {
    height: 85vh;
    width: auto;
    max-width: unset;
  }

  & > * {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  & > *.front { 
    z-index: 2;
    backface-visibility: hidden;
    transform: rotateX(0deg);
  }
  
  & > *.back { transform: rotateY(180deg) }
`;

export default React.forwardRef(({ children, flipped = false, ...props }: {
  children: [JSX.Element, JSX.Element],
  flipped?: boolean
} & IntrinsicHTML<"div">,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const container = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);

  useAnimation(flipped, container);

  useEffect(() => {
    if (!container.current) return;

    const ro = new ResizeObserver(e => {
      setWidth(e[0].contentRect.width);
    });

    ro.observe(container.current);

    return () => { ro.disconnect() }
  }, []);

  return (
    <Wrapper
      ref={ref}
      {...props}
      $width={width}
    >
      <Container ref={container}>
        {children}
      </Container>
    </Wrapper>
  );
});