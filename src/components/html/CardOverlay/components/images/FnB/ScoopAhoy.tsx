import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/fnb-scoop-ahoy.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 369/379;
  height: auto;
  width: 369px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="FnB - Scoop Ahoy"
      fill
      sizes="(max-width: 768px) 50vw, 100vw"
    />
  </Wrapper>
));
