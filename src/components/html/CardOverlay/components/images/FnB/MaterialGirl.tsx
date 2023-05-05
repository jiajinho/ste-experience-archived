import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/fnb-material-girl.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 346/650;
  height: auto;
  width: 346px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="FnB - Material Girl"
      fill
    />
  </Wrapper>
));
