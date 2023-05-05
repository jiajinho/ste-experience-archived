import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/time-clock.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 447/754;
  height: auto;
  width: 447px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="Time - Clock"
      fill
    />
  </Wrapper>
));
