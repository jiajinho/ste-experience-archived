import React from 'react';
import styled from 'styled-components';

import useAnimation from '../useAnimation';
import ScoopAhoy, { Wrapper as $ScoopAhoy } from './ScoopAhoy';
import Starcout, { Wrapper as $Starcout } from './Starcout';
import Blouse, { Wrapper as $Blouse } from './Blouse';
import Sunglass, { Wrapper as $Sunglass } from './Sunglass';
import GreenWave, { Wrapper as $GreenWave } from './GreenWave';
import MaterialGirl, { Wrapper as $MaterialGirl } from './MaterialGirl';

const Wrapper = styled.div(({ $cardWidth }: {
  $cardWidth: number
}) => `
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  ${$Starcout} {
    width: ${$cardWidth * 0.9}px;
    top: 8%;
    left: -97%;
  }

  ${$Blouse} {
    width: ${$cardWidth * 0.5}px;
    top: 44%;
    left: -92%;
  }

  ${$Sunglass} {
    width: ${$cardWidth * 0.4}px;
    top: 1%;
    left: -46%;
  }

  ${$ScoopAhoy} {
    width: ${$cardWidth * 0.6}px;
    top: 12%;
    right: -70%;
  }

  ${$GreenWave} {
    width: ${$cardWidth * 0.2}px;
    top: 55%;
    right: -36%;
  }

  ${$MaterialGirl} {
    width: ${$cardWidth * 0.6}px;
    top: 13%;
    right: -100%;
  }
`);

export default ({ cardWidth, active }: {
  cardWidth: number,
  active: boolean
}) => {
  const addRef = useAnimation(active);

  return (
    <Wrapper $cardWidth={cardWidth}>
      <Starcout ref={addRef} />
      <Blouse ref={addRef} />
      <Sunglass ref={addRef} />

      <ScoopAhoy ref={addRef} />
      <GreenWave ref={addRef} />
      <MaterialGirl ref={addRef} />
    </Wrapper>
  )
}