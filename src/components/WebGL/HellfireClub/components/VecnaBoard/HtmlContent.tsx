import React from 'react';
import styled from 'styled-components';
import { Html } from '@react-three/drei';

import locale from 'locale';
import HexButton, { Wrapper as $HexButton } from '@html/common/HexButton';
import Netflix, { Wrapper as $Netflix } from '@html/common/svg/Netflix';
import SGTourism, { Wrapper as $SGTourism } from '@html/common/SGTourism';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & * {
    font-family: var(--font-benguiat);
  }

  ${$HexButton} {
    align-self: center;
    background: var(--color-frosted-lemon);
    color: black;
  }
`;

const Title = styled.h1`
  color: var(--color-frosted-lemon);
  text-transform: uppercase;
  white-space: pre;
  text-align: center;
  font-size: 22px;
`;

const Sponsors = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;

  p { 
    color: var(--color-blood);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 10px;
  }
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${$Netflix} { width: 40px }
  ${$SGTourism} { width: 50px}
`;

export default ({ onCallToAction }: {
  onCallToAction?: () => void,
}) => {


  return (
    <Html
      occlude={false}
      prepend
      transform
      position={[0.17, 0.002, 0]}
      scale={0.045}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
    >
      <Wrapper onClick={e => e.stopPropagation()}>
        <Title>
          {locale.vecnaBoard.title.trim()}
        </Title>

        <HexButton onClick={onCallToAction}>
          {locale.vecnaBoard.cta}
        </HexButton>

        <Sponsors>
          <p>{locale.vecnaBoard.sponsors}</p>

          <IconGroup>
            <Netflix color="#aaa" />
            <SGTourism />
          </IconGroup>
        </Sponsors>
      </Wrapper>
    </Html>
  );
}