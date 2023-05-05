import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/xpass-trash-dino.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 253/304;
  height: auto;
  width: 253px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="XPass - Trash Dino"
      fill
    />
  </Wrapper>
));
