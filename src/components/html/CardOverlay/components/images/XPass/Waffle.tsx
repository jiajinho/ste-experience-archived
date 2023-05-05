import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/xpass-waffle.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 283/238;
  height: auto;
  width: 283px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="XPass - Waffle"
      fill
    />
  </Wrapper>
));
