import React from 'react';
import styled from 'styled-components';

import useAnimation from '../useAnimation';
import Bugis, { Wrapper as $Bugis } from './Bugis';
import Flower, { Wrapper as $Flower } from './Flower';
import Map, { Wrapper as $Map } from './Map';
import Bag, { Wrapper as $Bag } from './Bag';

const Wrapper = styled.div(({ $cardWidth }: {
  $cardWidth: number
}) => `
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  ${$Bugis} {
    width: ${$cardWidth * 0.6}px;
    top: 18%;
    left: -69%;
  }

  ${$Flower} {
    width: ${$cardWidth * 0.7}px;
    top: 38%;
    left: -80%;
  }

  ${$Map} {
    width: ${$cardWidth * 0.6}px;
    top: 18%;
    right: -78%;
  }

  ${$Bag} {
    width: ${$cardWidth * 0.35}px;
    top: 56%;
    right: -48%;
  }
`);

export default ({ cardWidth, active }: {
  cardWidth: number,
  active: boolean
}) => {
  const addRef = useAnimation(active);

  return (
    <Wrapper $cardWidth={cardWidth}>
      <Bugis ref={addRef} />
      <Flower ref={addRef} />
      <Map ref={addRef} />
      <Bag ref={addRef} />
    </Wrapper>
  )
}