import React from 'react';
import styled from 'styled-components';

import { IntrinsicHTML } from 'types';
import Card from './components/Card';
import BackTemplate from './components/BackTemplate';
import Image from 'next/image';

const ImageContainer = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
`;

export default React.forwardRef(({ ...props }: {
} & IntrinsicHTML<"div">,
  ref: React.ForwardedRef<HTMLDivElement>
) => {

  return (
    <Card ref={ref} flipped={false} {...props}>
      <div className="front">
        <BackTemplate />

        <ImageContainer>
          <Image
            src="/static/cards/merch/vecna.png"
            alt="Test"
            fill
          />
        </ImageContainer>
      </div>

      <div className="back" />
    </Card>
  )
});