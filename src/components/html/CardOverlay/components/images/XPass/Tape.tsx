import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/xpass-tape.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 306/357;
  height: auto;
  width: 306px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="XPass - Tape"
      fill
    />
  </Wrapper>
));
