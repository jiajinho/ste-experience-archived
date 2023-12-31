import React from 'react';
import styled from 'styled-components';

import useAnimation from '../useAnimation';
import Calendar, { Wrapper as $Calendar } from './Calendar';
import Demogorgon, { Wrapper as $Demogorgon } from './Demogorgon';
import StrangerThings, { Wrapper as $StrangerThings } from './StrangerThings';

const Wrapper = styled.div(({ $cardWidth }: {
  $cardWidth: number
}) => `
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  ${$Calendar} {
    width: ${$cardWidth * 0.8}px;
    top: 22%;
    left: -86%;
  }

  ${$Demogorgon} {
    width: ${$cardWidth * 0.6}px;
    top: 14%;
    right: -93%;
  }

  ${$StrangerThings} {
    width: ${$cardWidth * 0.6}px;
    top: 49%;
    right: -68%;
  }
`);

export default ({ cardWidth, active }: {
  cardWidth: number,
  active: boolean
}) => {
  const addRef = useAnimation(active);

  return (
    <Wrapper $cardWidth={cardWidth}>
      <Calendar ref={addRef} />
      <Demogorgon ref={addRef} />
      <StrangerThings ref={addRef} />
    </Wrapper>
  )
}