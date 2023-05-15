import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import config from 'config';
import { IntrinsicHTML } from 'types';
import useCardStore from 'stores/html/useCardStore';

import Card from './components/Card';
import FrontTemplate from './components/FrontTemplate';

const ImageContainer = styled.div`
  aspect-ratio: 1/1;
  height: calc(var(--card-width) * 0.6);
  width: auto;

  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > * { object-fit: contain }
`;

const Image = styled.img`
  object-fit: contain;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const TextContainer = styled.div`
  width: calc(var(--card-width) * 0.8);

  position: absolute;
  top: 68%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--color-cherry);
  font-family: var(--font-benguiat);
  font-size: calc(var(--card-width) / 16);
  text-align: center;

  & b { text-transform: uppercase }
`;

const Button = styled.button`
  background: transparent;
  border: 2px solid #843B3B;
  outline: none;
  border-radius: 9999px;
  cursor: pointer;

  position: absolute;
  top: 88%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: var(--font-benguiat);
  color: #F5E2C8;
  font-weight: 700;
  font-size: calc(var(--card-width) / 26);

  padding: calc(var(--card-width) / 52) calc(var(--card-width) / 12);
`;

export default React.forwardRef(({ ...props }: {
} & IntrinsicHTML<"div">,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const merch = useCardStore(state => state.merch);

  return (
    <Card ref={ref} {...props}>
      <div className="front">
        <FrontTemplate />

        <ImageContainer>
          {merch && <Image src={config.assetUrl.image[merch]} />}
        </ImageContainer>

        <TextContainer>
          {merch &&
            <>
              <p dangerouslySetInnerHTML={{ __html: locale.card.merch.item[merch][0] || '' }} />
              <p dangerouslySetInnerHTML={{ __html: locale.card.merch.item[merch][1] || '' }} />
            </>
          }
        </TextContainer>

        <Button>
          {locale.card.merch.closeBtn}
        </Button>
      </div>

      <div className="back" />
    </Card>
  )
});