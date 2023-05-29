import React from 'react';
import styled from 'styled-components';

import useAnimation from '../useAnimation';
import Clock, { Wrapper as $Clock } from './Clock';
import Devil, { Wrapper as $Devil } from './Devil';
import Club, { Wrapper as $Club } from './Club';

const Wrapper = styled.div(({ $cardWidth }: {
  $cardWidth: number
}) => `
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  ${$Clock} {
    width: ${$cardWidth * 0.6}px;
    top: 18%;
    left: -76%;
  }

  ${$Devil} {
    width: ${$cardWidth * 0.55}px;
    top: 12%;
    right: -76%;
  }

  ${$Club} {
    width: ${$cardWidth * 0.35}px;
    top: 62%;
    right: -42%;
  }
`);

export default ({ cardWidth, active }: {
  cardWidth: number,
  active: boolean
}) => {
  const addRef = useAnimation(active);

  return (
    <Wrapper $cardWidth={cardWidth}>
      <Clock ref={addRef} />
      <Devil ref={addRef} />
      <Club ref={addRef} />
    </Wrapper>
  )
}