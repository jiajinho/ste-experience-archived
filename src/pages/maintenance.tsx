import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import config from 'config';
import STEncounter, { Wrapper as $STEncounter } from '@html/common/STEncounter';

const Wrapper = styled.div`
  padding: 32px 16px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  background: #0C060D;

  ${$STEncounter} {
    --width: 113.6px;
    position: relative;
    z-index: 3;
  }

  @media screen and (min-height: 560px) {
    justify-content: start;
  }
`;

const GradientBg = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(180deg, #142640 10%, #0C060D 100%);
`;

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 320px;

  @media screen and (min-height: 560px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: ${config.viewport.md}) {
    max-width: 475px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;

  h1 {
    color: #E23A3A;
    font-family: var(--font-benguiat);
    text-transform: uppercase;
    font-size: 32px;
    line-height: 32px;
  }

  p {
    color: #cfcfcf;
    font-family: var(--font-maax);
    font-size: 16px;
    line-height: 22px;
  }

  @media screen and (min-width: ${config.viewport.md}) {
    h1 {
      font-size: 48px;
      line-height: 48px;
    }
  }
`;

export default () => {
  return (
    <Wrapper>
      <GradientBg />

      <STEncounter />

      <Container>
        <Text>
          <h1>
            {locale.maintenance.title}
          </h1>

          <p>
            {locale.maintenance.description}
          </p>
        </Text>
      </Container>
    </Wrapper>
  );
}