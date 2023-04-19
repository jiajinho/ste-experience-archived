import React from 'react';
import styled from 'styled-components';
import { Html } from '@react-three/drei';
import Image from 'next/image';

import locale from 'locale';
import theXPass from "/public/static/images/the-xpass.png";
import OctaButton, { Wrapper as $OctaButton } from '@html/common/OctaButton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  ${$OctaButton} {
    margin-top: 24px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 648/78;
  width: 200px;
  height: auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  & * {
    font-family: var(--font-chalkiez);
  }

  p {
    color: var(--color-frosted-lemon);
    text-align: center;
    white-space: pre;
  }
`;

export default () => {

  return (
    <Html
      occlude={false}
      prepend
      transform
      position={[0, -0.25, 0]}
      scale={0.09}
    >
      <Wrapper>
        <ImageContainer>
          <Image
            src={theXPass}
            fill
            alt="The XPass"
          />
        </ImageContainer>

        <TextContainer>
          {locale.chalkBoard.description.map((v, i) =>
            <p key={i}>
              {v.trim()}
            </p>
          )}
        </TextContainer>

        <OctaButton>
          {locale.chalkBoard.cta}
        </OctaButton>
      </Wrapper>
    </Html>
  )
}