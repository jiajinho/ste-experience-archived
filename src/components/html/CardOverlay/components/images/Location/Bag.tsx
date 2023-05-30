import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import useAssetEnvUrl from '@/hooks/common/useAssetEnvUrl';

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 235/272;
  height: auto;
  width: 235px;
  display: block;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLPictureElement>) => {
  const url = useAssetEnvUrl('static/cards/filler/location-bag.png');

  return (
    <Wrapper ref={ref}>
      <Image
        src={url}
        alt="Location - Bag"
        fill
        sizes="(max-width: 768px) 50vw, 100vw"
      />
    </Wrapper>
  )
});