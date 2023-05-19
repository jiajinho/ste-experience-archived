import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/fnb-blouse.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 263/303;
  height: auto;
  width: 263px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="FnB - Blouse"
      fill
      sizes="(max-width: 768px) 50vw, 100vw"
    />
  </Wrapper>
));
