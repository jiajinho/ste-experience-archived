import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/merch-mug.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 335/284;
  height: auto;
  width: 335px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="Merch - Mug"
      fill
    />
  </Wrapper>
));
