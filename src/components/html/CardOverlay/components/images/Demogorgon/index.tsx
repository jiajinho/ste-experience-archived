import React, { useRef } from 'react';
import styled from 'styled-components';

import Demogorgon1, { Wrapper as $Demogorgon1 } from './Demogorgon1';
import Demogorgon2, { Wrapper as $Demogorgon2 } from './Demogorgon2';
import Demogorgon3, { Wrapper as $Demogorgon3 } from './Demogorgon3';
import useAnimation from '../useAnimation';

const Wrapper = styled.div(({ $cardWidth }: {
  $cardWidth: number
}) => `
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  ${$Demogorgon1} {
    width: ${$cardWidth * 0.8}px;
    top: 31%;
    left: -50%;
  }
  
  ${$Demogorgon2} {
    width: ${$cardWidth * 0.5}px;
    top: 59%;
    right: -48%;
  }

  ${$Demogorgon3} {
    width: ${$cardWidth * 0.5}px;
    top: 20%;
    right: -48%;
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
      <Demogorgon1 ref={r => r && refs.current.push(r)} />
      <Demogorgon2 ref={r => r && refs.current.push(r)} />
      <Demogorgon3 ref={r => r && refs.current.push(r)} />
    </Wrapper>
  )
}