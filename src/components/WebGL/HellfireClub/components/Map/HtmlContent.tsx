import React from 'react';
import styled from 'styled-components';
import { Html } from '@react-three/drei';

import locale from 'locale';
import OctaButton, { Wrapper as $OctaButton } from '@html/common/OctaButton';

export const Wrapper = styled.div`
  position: relative;

  ${$OctaButton} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default ({ onCallToAction }: {
  onCallToAction?: () => void
}) => {


  return (
    <Html
      occlude={false}
      prepend
      transform
      position={[0.005, 0.002, -0.12]}
      scale={0.01}
      rotation={[Math.PI / 2, Math.PI, 0]}
    >
      <Wrapper>
        <OctaButton onClick={onCallToAction}>
          {locale.map.cta}
        </OctaButton>
      </Wrapper>
    </Html>
  );
}