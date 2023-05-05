import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/demogorgon-1.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 317/343;
  height: auto;
  width: 317px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="Demogorgon - 1"
      fill
    />
  </Wrapper>
));
