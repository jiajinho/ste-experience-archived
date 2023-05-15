import React, { useMemo, useRef } from 'react';
import styled from 'styled-components';

import locale from 'locale';
import useViewportStore from 'stores/useViewportStore';
import useLoadAnimationStore from 'stores/html/useLoadAnimationStore';
import useAnimation from './useAnimation';
import useDoubleClick from './useDoubleClick';

import Button from './Button';
import Caret from './Caret';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80%;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Word = styled.div`
  display: flex;
`;

const Char = styled.p(({ $fontSize }: {
  $fontSize: number
}) => `
  font-family: var(--font-benguiat);
  color: var(--color-cherry);
  font-size: ${$fontSize}px;
  font-weight: 700;
  white-space: pre;

  opacity: 0;
  visibility: hidden;
`);

const SkipButton = styled.button`
  position: fixed;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);

  font-size: 16px;
  color: white;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: var(--font-benguiat);
  font-weight: 700;

  visibility: hidden;
`;

export default () => {
  const phase = useLoadAnimationStore(state => state.typewriter);
  const setLoadAnimationStore = useLoadAnimationStore(state => state.set);

  const wrapper = useRef<HTMLDivElement>(null);
  const chars = useRef<HTMLParagraphElement[]>([]);
  const caret = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const skip = useRef<HTMLButtonElement>(null);

  const md = useViewportStore(state => state.md);
  const lg = useViewportStore(state => state.lg);

  const words = useMemo(() => {
    return locale.loading.premise
      .trim()
      .replaceAll(/[\s]{2,}/g, " ")
      .split(" ");
  }, []);

  useAnimation(chars, caret, button, wrapper, skip);
  useDoubleClick();

  const handleSkipClick = () => {
    if (phase !== "start") return;

    setLoadAnimationStore("typewriter", "skipped");
  }

  let fontSize = 20;
  if (md) fontSize = 28;
  if (lg) fontSize = 32;

  chars.current.length = 0;


  return (
    <>
      <Caret ref={caret} height={fontSize} />

      <SkipButton
        ref={skip}
        onClick={handleSkipClick}
      >
        {locale.loading.skipBtn}
      </SkipButton>

      <Wrapper ref={wrapper}>
        <Container>
          {words.map((w, i) =>
            <React.Fragment key={i}>
              <Word>
                {w.split("").map((c, j) =>
                  <Char
                    key={j}
                    ref={d => d && chars.current.push(d)}
                    $fontSize={fontSize}
                  >
                    {c}
                  </Char>
                )}
              </Word>

              {i < words.length - 1 &&
                <Char
                  key={i + 100}
                  ref={d => d && chars.current.push(d)}
                  $fontSize={fontSize}
                >
                  &nbsp;
                </Char>
              }
            </React.Fragment>
          )}
        </Container>

        <Button
          ref={button}
          onClick={() => setLoadAnimationStore("typewriter", "end")}
        >
          {locale.loading.continueBtn}
        </Button>
      </Wrapper>
    </>
  )
}