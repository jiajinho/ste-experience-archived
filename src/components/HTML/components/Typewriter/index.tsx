import React, { useMemo, useRef } from 'react';
import styled from 'styled-components';

import locale from 'locale';

import { AnimatePhase } from './types';
import useAnimation from './useAnimation';
import Button from './Button';
import Caret from './Caret';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 558px;
  justify-content: center;
`;

const Char = styled.p`
  font-family: var(--font-benguiat);
  color: var(--color-cherry);
  font-size: 32px;
  white-space: pre;

  opacity: 0;
  visibility: hidden;
`;

export default ({ phase, onContinue }: {
  phase: AnimatePhase,
  onContinue: () => void
}) => {
  const chars = useRef<HTMLParagraphElement[]>([]);
  const caret = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  const data = useMemo(() => {
    return locale.loading.premise
      .trim()
      .replaceAll(/[\s]{2,}/g, " ")
      .split("");
  }, []);

  useAnimation(phase, chars, caret, button);

  chars.current.length = 0;

  return (
    <>
      <Caret ref={caret} />

      <Wrapper>
        <Container>
          {data.map((s, i) =>
            <Char key={i} ref={d => d && chars.current.push(d)}>
              {s}
            </Char>
          )}
        </Container>

        <Button ref={button} onClick={onContinue}>
          {locale.loading.continueBtn}
        </Button>
      </Wrapper>
    </>
  )
}