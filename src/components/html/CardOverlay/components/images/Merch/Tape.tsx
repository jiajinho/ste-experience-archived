import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/merch-tape.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 429/302;
  height: auto;
  width: 429px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="Merch - Tape"
      fill
    />
  </Wrapper>
));