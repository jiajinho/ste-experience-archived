import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import sgTourism from '/public/static/images/sg-tourism.png';

export const Wrapper = styled.picture`
  position: relative;
  aspect-ratio: 50/37;
  width: 300px;
  height: auto;
`;

export default () => {


  return (
    <Wrapper>
      <Image
        src={sgTourism}
        alt="Singapore Tourism Board"
        fill
      />
    </Wrapper>
  )
}