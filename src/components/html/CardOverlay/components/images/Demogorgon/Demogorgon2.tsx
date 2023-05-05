import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/demogorgon-2.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 418/462;
  height: auto;
  width: 418px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="Demogorgon - 2"
      fill
    />
  </Wrapper>
));