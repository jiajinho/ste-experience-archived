import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { getAssetEnvUrl } from '@/utils';

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 447/754;
  height: auto;
  width: 447px;
  display: block;
`;

const url = getAssetEnvUrl('static/cards/filler/time-clock.png');

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => {
  return (
    <Wrapper ref={ref}>
      <Image
        src={url}
        alt="Time - Clock"
        fill
        sizes="(max-width: 768px) 50vw, 100vw"
      />
    </Wrapper>
  )
});
