import React from 'react';
import styled from 'styled-components';
import { Html } from '@react-three/drei';

import locale from 'locale';
import STEncounter, { Wrapper as $STEncounter } from '@html/common/STEncounter';
import HexButton, { Wrapper as $HexButton } from '@html/common/HexButton';

export const Wrapper = styled.div`
  position: relative;

  ${$HexButton} {
    position: absolute;
    top: 90px;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.25);
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: -96px;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  ${$STEncounter} {
    --width: 45px;
  }

  h1 {
    font-family: var(--font-benguiat);
    font-weight: 700;
    font-size: 25px;
    text-transform: uppercase;
    color: var(--color-blood);
  }
`;

export default ({ onReadMore }: {
  onReadMore?: () => void
}) => {
  return (
    <Html
      occlude={false}
      prepend
      transform
      position={[0.005, 0.0018, -0.005]}
      scale={0.05}
      rotation={[Math.PI / 2, Math.PI, 0]}
    >
      <Wrapper>
        <TitleContainer>
          <STEncounter color="var(--color-blood)" altColor='black' />
          <h1>{locale.map.title}</h1>
        </TitleContainer>

        <HexButton onClick={onReadMore}>
          {locale.map.cta}
        </HexButton>
      </Wrapper>
    </Html>
  );
}