import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { getAssetEnvUrl } from '@/utils';

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 505/401;
  height: auto;
  width: 505px;
  display: block;
`;

const url = getAssetEnvUrl('static/cards/filler/date-st.png');

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => {

  return (
    <Wrapper ref={ref}>
      <Image
        src={url}
        alt="Date - Stranger Things"
        fill
        sizes="(max-width: 768px) 50vw, 100vw"
      />
    </Wrapper>
  )
});
