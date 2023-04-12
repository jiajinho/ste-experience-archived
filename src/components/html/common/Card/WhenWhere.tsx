import React from "react";
import Image from "next/image";
import styled from "styled-components";

import config from "config";
import { IntrinsicHTML } from "types";
import whenWhereFront from "/public/static/cards/when-where-front.png";
import whenWhereBack from "/public/static/cards/when-where-back.png";
import useLoadProgressStore from 'stores/useLoadProgressStore';

import Card from "./components/Card";
import FrontTemplate from "./components/FrontTemplate";
import BackTemplate from "./components/BackTemplate";
import HexRing, { Wrapper as $HexRing } from "../svg/HexRing";

const Content = styled.div`
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 73%;

  display: flex;
  flex-direction: column;
  gap: calc(var(--card-width) / 15);
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
    letter-spacing: 0.5px;
  }
  
  &:hover p {
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
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  & > p {
    text-transform: uppercase;
  }
`;

const Value = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 6px;

  & > p {
    font-weight: 400;
    white-space: pre-line;
  }
`;

export default React.forwardRef(({ flipped, ...props }: {
  flipped?: boolean,
} & IntrinsicHTML<"div">,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const setLoadProgressStore = useLoadProgressStore(state => state.set);

  return (
    <Card
      ref={ref}
      flipped={flipped}
      {...props}
    >
      <div className="front">
        <FrontTemplate />
        <Image
          src={whenWhereFront}
          alt="When Where - Front"
          fill
          onLoadingComplete={() => setLoadProgressStore("html", { whenWhereFront: true })}
        />
      </div>

      <div className="back">
        <BackTemplate />
        <Image
          src={whenWhereBack}
          alt="When Where - Back"
          fill
          onLoadingComplete={() => setLoadProgressStore("html", { whenWhereBack: true })}
        />

        <Content>
          {config.cards.whenWhere.content.map((v, i) =>
            <Row key={i}>
              <Icon>
                <HexRing />
                {v.icon}
              </Icon>

              <InfoContainer>
                <p>{v.title}:</p>

                <Value>
                  {v.value.map((u, i) =>
                    <p key={i}>{u.trim()}</p>
                  )}
                </Value>
              </InfoContainer>
            </Row>
          )}
        </Content>
      </div>
    </Card>
  )
});