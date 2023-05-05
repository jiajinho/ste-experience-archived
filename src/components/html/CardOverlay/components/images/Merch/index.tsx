import React, { useRef } from 'react';
import styled from 'styled-components';

import Shirt, { Wrapper as $Shirt } from './Shirt';
import Mug, { Wrapper as $Mug } from './Mug';
import Tape, { Wrapper as $Tape } from './Tape';
import Denim, { Wrapper as $Denim } from './Denim';
import useAnimation from '../useAnimation';

const Wrapper = styled.div(({ $cardWidth }: {
  $cardWidth: number
}) => `
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  ${$Shirt} {
    width: ${$cardWidth * 1}px;
    top: 12%;
    left: -94%;
  }

  ${$Mug} {
    width: ${$cardWidth * 0.4}px;
    top: 61%;
    left: -84%;
  }

  ${$Tape} {
    width: ${$cardWidth * 0.5}px;
    top: 18%;
    right: -56%;
  }

  ${$Denim} {
    width: ${$cardWidth * 0.8}px;
    top: 51%;
    right: -89%;
  }
`);

export default ({ cardWidth, active }: {
  cardWidth: number,
  active: boolean
}) => {
  const refs = useRef<HTMLPictureElement[]>([]);

  useAnimation(refs, active);

  refs.current = [];

  return (
    <Wrapper $cardWidth={cardWidth}>
      <Shirt ref={r => r && refs.current.push(r)} />
      <Mug ref={r => r && refs.current.push(r)} />
      <Tape ref={r => r && refs.current.push(r)} />
      <Denim ref={r => r && refs.current.push(r)} />
    </Wrapper>
  )
}