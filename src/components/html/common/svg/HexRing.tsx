import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.svg`
  aspect-ratio: 80/98;
  height: auto;
  width: auto;
  display: block;
`;

export default () => (
  <Wrapper
    width={80}
    height={98}
    viewBox="0 0 80 98"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.66016 71.395V26.225L40.9602 6.55499L75.2701 26.225V71.395L40.9602 91.065L6.66016 71.395Z"
      fill="black"
    />
    <path
      d="M39.99 97.62L0 74.69V22.93L39.99 0L79.98 22.93V74.69L39.99 97.62ZM1.95 73.56L39.99 95.37L78.03 73.56V24.06L39.99 2.25L1.95 24.06V73.56Z"
      fill="#EC1A3B"
    />
    <path
      d="M39.99 92.19L4.70996 71.96V25.66L39.99 5.43002L75.27 25.66V71.96L39.99 92.19ZM6.65996 70.83L39.99 89.94L73.32 70.83V26.79L39.99 7.68002L6.65996 26.79V70.83Z"
      fill="#EC1A3B"
    />
  </Wrapper>
)
