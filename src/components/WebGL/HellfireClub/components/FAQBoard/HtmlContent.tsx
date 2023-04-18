import React from 'react';
import styled from 'styled-components';
import { Html } from '@react-three/drei';

import config from 'config';
import locale from 'locale';
import HexRing, { Wrapper as $HexRing } from '@html/common/svg/HexRing';
import HexButton from '@html/common/HexButton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  gap: 30px;

  & * {
    font-family: var(--font-benguiat);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  
  width: 741px;
`;

const Row = styled.div`
  display: flex;
  align-items: start;
  gap: 5px;
  gap: 18px;
`;

const Icon = styled.div`
  position: relative;

  ${$HexRing} {
    flex-shrink: 0;
    width: 55px;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    font-size: 36px;
    color: var(--color-blood);
  }
`;

const TextContainer = styled.div`
  h1 {
    font-size: 32px;
  }

  p {
    font-size: 26px;
    line-height: 32px;
  }
`;

export default ({ onCallToAction }: {
  onCallToAction?: () => void
}) => (
  <Html
    occlude={false}
    prepend
    transform
    position={[0.005, 0.0018, -0.005]}
    scale={0.009}
    rotation={[Math.PI / 2, Math.PI, 0]}
  >
    <Wrapper>
      <Content>
        {config.faq.map((v, i) =>
          <Row key={i}>
            <Icon>
              <HexRing background="transparent" color="var(--color-blood)" />
              <p>{i + 1}</p>
            </Icon>

            <TextContainer>
              <h1>{v.question}</h1>
              <p>{v.answer}</p>
            </TextContainer>
          </Row>
        )}
      </Content>

      <HexButton onClick={onCallToAction}>
        {locale.faq.cta}
      </HexButton>
    </Wrapper>
  </Html>
);
