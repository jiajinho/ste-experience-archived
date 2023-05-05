import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/fnb-starcout.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 557/376;
  height: auto;
  width: 557px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="FnB - Starcout"
      fill
    />
  </Wrapper>
));
