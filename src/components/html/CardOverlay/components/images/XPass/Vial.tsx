import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/xpass-vial.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 230/328;
  height: auto;
  width: 230px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="XPass - Vial"
      fill
      sizes="(max-width: 768px) 50vw, 100vw"
    />
  </Wrapper>
));
