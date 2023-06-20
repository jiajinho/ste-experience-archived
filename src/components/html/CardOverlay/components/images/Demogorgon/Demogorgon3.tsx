import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { getAssetEnvUrl } from '@/utils';

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 377/315;
  height: auto;
  width: 377px;
  display: block;
`;

const url = getAssetEnvUrl('static/cards/filler/demogorgon-3.png');

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => {
  return (
    <Wrapper ref={ref}>
      <Image
        src={url}
        alt="Demogorgon - 3"
        fill
        sizes="(max-width: 768px) 50vw, 100vw"
      />
    </Wrapper>
  )
});
