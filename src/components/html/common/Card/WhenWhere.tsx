import React from "react";
import Image from "next/image";
import styled from "styled-components";

import config from "@/config";
import { IntrinsicHTML } from "@/types";
// import whenWhereBack from "/public/static/cards/when-where-back.png";
import useLoadProgressStore from '@/stores/useLoadProgressStore';

import Card from "./components/Card";
import BackTemplate from "./components/BackTemplate";
import HexRing, { Wrapper as $HexRing } from "../svg/HexRing";

const Content = styled.div`
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 77%;

  display: flex;
  flex-direction: column;
  gap: calc(var(--card-width) / 15);
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: calc(var(--card-width) / 30);

  p {
    font-family: var(--font-benguiat);
    font-size: calc(var(--card-width) / 30);
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
`;

const Title = styled.p`
  text-transform: uppercase;
  font-weight: 700;
`;

const Value = styled.p`
  text-transform: 400;
  white-space: pre-line;
`;

export default React.forwardRef(({ onRowHover, ...props }: {
  onRowHover?: (index: number) => void,
} & IntrinsicHTML<"div">,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const setLoadProgressStore = useLoadProgressStore(state => state.set);

  return (
    <Card ref={ref} flipped={false} {...props}>
      <div className="front">
        <BackTemplate />
        <Image
          src="https://d2sie3twm806m7.cloudfront.net/sg-2023/general_admission_3d/static/cards/when-where-back.png"
          alt="When Where - Back"
          fill
          sizes="(max-width: 768px) 50vw, 100vw"
          onLoadingComplete={() => setLoadProgressStore("html", { whenWhereBack: true })}
        />

        <Content>
          {config.cards.whenWhere.content.map((v, i) =>
            <Row key={i} onPointerMove={() => onRowHover && onRowHover(i)}>
              <Icon style={v.style}>
                <HexRing />
                {v.icon}
              </Icon>

              <InfoContainer>
                <Title>{v.title}:</Title>

                <Value dangerouslySetInnerHTML={{ __html: v.value.trim() }} />
              </InfoContainer>
            </Row>
          )}
        </Content>
      </div>

      <div className="back" />
    </Card>
  )
});