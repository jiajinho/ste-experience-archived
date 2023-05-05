import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/date-st.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 505/401;
  height: auto;
  width: 505px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="Date - Stranger Things"
      fill
    />
  </Wrapper>
));
