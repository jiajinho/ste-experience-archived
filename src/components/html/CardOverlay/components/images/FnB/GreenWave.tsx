import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/fnb-green-wave.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 141/207;
  height: auto;
  width: 141px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="FnB - Green Wave"
      fill
      sizes="(max-width: 768px) 50vw, 100vw"
    />
  </Wrapper>
));
