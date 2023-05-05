import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/time-club.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 203/149;
  height: auto;
  width: 203px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="Time - Club"
      fill
    />
  </Wrapper>
));
