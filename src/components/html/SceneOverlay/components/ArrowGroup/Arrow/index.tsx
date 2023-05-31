import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import Arrow, { Wrapper as $Arrow, Direction as ArrowDirection } from '@html/common/svg/Arrow';
import { applyStyleIf } from '@/utils';
import useAnimation from './useAnimation';

export const Wrapper = styled.div(({ $dir }: {
  $dir: LabelDirection
}) => `
  position: relative;
  
  ${$Arrow} { pointer-events: auto }
  
  ${applyStyleIf($dir === "down", `
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `)}
`);

const Label = styled.p(({ $dir }: {
  $dir: LabelDirection
}) => `
  position: absolute;

  color: white;
  font-family: var(--font-benguiat);
  text-shadow: 0 0 8px #000;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 700;

  user-select: none;

  --margin: 10px;

  ${applyStyleIf($dir === "left", `
    right: calc(100% + var(--margin));
    top: 50%;
    transform: translateY(-50%);
  `)}

  ${applyStyleIf($dir === "right", `
    left: calc(100% + var(--margin));
    top: 50%;
    transform: translateY(-50%);
  `)}

  ${applyStyleIf($dir === "down", `
    position: relative;
    margin-top: var(--margin);
    white-space: pre-line;
    text-align: center;
    font-size: 12px;
  `)}
`);

export type Viewport = "desktop" | "mobile";
type LabelDirection = "left" | "right" | "down";

export default ({ label, viewport, arrowDirection, onClick }: {
  label: string,
  viewport: Viewport,
  arrowDirection: ArrowDirection,
  onClick: () => void
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [active, setActive] = useState(false);

  useAnimation(ref, viewport === "desktop" ? active : true);

  const handlePointerMove = () => {
    setActive(true);
  }

  const handlePointerOut = () => {
    setActive(false);
  }

  let labelDirection: LabelDirection = "left";

  if (viewport === "desktop" && arrowDirection === "left") {
    labelDirection = "right";
  }
  else if (viewport === "mobile") {
    labelDirection = "down";
  }

  return (
    <Wrapper $dir={labelDirection}>
      <Arrow
        direction={arrowDirection}
        onClick={onClick}
        onPointerMove={handlePointerMove}
        onPointerOut={handlePointerOut}
      />

      <Label ref={ref} $dir={labelDirection}>
        {label}
      </Label>
    </Wrapper>
  )
}