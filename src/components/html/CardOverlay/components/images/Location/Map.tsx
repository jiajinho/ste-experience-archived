import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/location-map.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 519/513;
  height: auto;
  width: 519px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="Location - Map"
      fill
    />
  </Wrapper>
));
