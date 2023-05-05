import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/location-bag.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 235/272;
  height: auto;
  width: 235px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="Location - Bag"
      fill
    />
  </Wrapper>
));
