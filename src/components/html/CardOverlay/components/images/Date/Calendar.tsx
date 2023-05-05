import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image from "/public/static/cards/filler/date-calendar.png";

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 509/584;
  height: auto;
  width: 509px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => (
  <Wrapper ref={ref}>
    <Image
      src={image}
      alt="Date - Calendar"
      fill
    />
  </Wrapper>
));
