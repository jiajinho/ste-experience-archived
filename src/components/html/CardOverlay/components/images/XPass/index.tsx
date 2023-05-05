import React, { useRef } from 'react';
import styled from 'styled-components';

import useAnimation from '../useAnimation';
import Ghost, { Wrapper as $Ghost } from './Ghost';
import Tape, { Wrapper as $Tape } from './Tape';
import Clock, { Wrapper as $Clock } from './Clock';
import Waffle, { Wrapper as $Waffle } from './Waffle';
import TrashDino, { Wrapper as $TrashDino } from './TrashDino';
import Vial, { Wrapper as $Vial } from './Vial';

const Wrapper = styled.div(({ $cardWidth }: {
  $cardWidth: number
}) => `
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  ${$Ghost} {
    width: ${$cardWidth * 0.35}px;
    top: 22%;
    left: -93%;
  }

  ${$Tape} {
    width: ${$cardWidth * 0.35}px;
    top: 15%;
    left: -43%;
  }

  ${$Clock} {
    width: ${$cardWidth * 0.35}px;
    top: 42%;
    left: -74%;
  }

  ${$Waffle} {
    width: ${$cardWidth * 0.35}px;
    top: 27%;
    right: -52%;
  }

  ${$TrashDino} {
    width: ${$cardWidth * 0.35}px;
    top: 47%;
    right: -87%;
  }

  ${$Vial} {
    width: ${$cardWidth * 0.35}px;
    top: 58%;
    right: -47%;
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
      <Ghost ref={r => r && refs.current.push(r)} />
      <Tape ref={r => r && refs.current.push(r)} />
      <Clock ref={r => r && refs.current.push(r)} />

      <Waffle ref={r => r && refs.current.push(r)} />
      <TrashDino ref={r => r && refs.current.push(r)} />
      <Vial ref={r => r && refs.current.push(r)} />
    </Wrapper>
  )
}