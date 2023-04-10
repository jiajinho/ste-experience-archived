import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import config from 'config';
import { IntrinsicHTML } from 'types';

import HexRing, { Wrapper as $HexRing } from '@html/common/svg/HexRing';
import Card from './components/Card';
import FrontTemplate from './components/FrontTemplate';
import BackTemplate from './components/BackTemplate';

const Content = styled.div`
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 73%;

  display: flex;
  flex-direction: column;
  gap: calc(var(--card-width) / 25);
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: calc(var(--card-width) / 20);

  p {
    font-family: var(--font-benguiat);
    font-weight: 700;
    font-size: calc(var(--card-width) / 24.5);
    color: #FFEDC8;
    transition: 0.25s text-shadow;
  }
  
  &:hover > p {
    text-shadow: 0 0 6px red, 0 0 10px #f44;
  }

  &:hover ${$HexRing} {
    filter: drop-shadow(0px 0px 6px red);
  }
`;

const Icon = styled.div`
  position: relative;
  width: 14%;
  flex-shrink: 0;
  flex-grow: 0;

  ${$HexRing} {
    width: 100%;
    transition: 0.25s filter;
  }

  & > *:not(${$HexRing}) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 50%;
  }
`;

export default React.forwardRef(({ flipped, ...props }: {
  flipped?: boolean,
} & IntrinsicHTML<"div">,
  ref: React.ForwardedRef<HTMLDivElement>
) => (
  <Card
    ref={ref}
    flipped={flipped}
    {...props}
  >
    <div className="front">
      <FrontTemplate />
      <Image
        src="/static/cards/the-encounter-front.png"
        alt="The Encounter - Front"
        fill
      />
    </div>

    <div className="back">
      <BackTemplate />
      <Image
        src="/static/cards/the-encounter-back.png"
        alt="The Encounter - Back"
        fill
      />

      <Content>
        {config.cards.theEncounter.map((v, i) =>
          <Row key={i}>
            <Icon>
              <HexRing />
              {v.icon}
            </Icon>

            <p key={i}>
              {v.description}
            </p>
          </Row>
        )}
      </Content>
    </div>
  </Card>
));