import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/merch-denim.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 507/479;
  height: auto;
  width: 507px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="Merch - Denim and cap"
      fill
    />
  </Wrapper>
));
