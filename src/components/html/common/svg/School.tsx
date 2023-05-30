import React from 'react';
import styled from 'styled-components';
import { IntrinsicHTML } from '@/types';

export const Wrapper = styled.svg`
  aspect-ratio: 54/41;
  height: auto;
  width: auto;
  display: block;
`;

export default (props: IntrinsicHTML<"svg">) => (
  <Wrapper
    {...props}
    width={54}
    height={41}
    viewBox="0 0 54 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M48.1004 19.8446H5.14038V36.9546H48.1004V19.8446Z"
      stroke="#FFEDC8"
      strokeWidth="2.24"
      strokeMiterlimit={10}
    />
    <path
      d="M51.4603 19.8446H1.78027L6.26027 9.28455H46.9803L51.4603 19.8446Z"
      stroke="#FFEDC8"
      strokeWidth="2.24"
      strokeMiterlimit={10}
    />
    <path
      d="M34.1204 39.5545H19.1204V10.4945L26.6204 1.89453L34.1204 10.4945V39.5545Z"
      fill="black"
      stroke="#FFEDC8"
      strokeWidth="2.24"
      strokeMiterlimit={10}
    />
    <path
      d="M26.6204 18.3846C28.2276 18.3846 29.5304 17.0817 29.5304 15.4745C29.5304 13.8674 28.2276 12.5646 26.6204 12.5646C25.0133 12.5646 23.7104 13.8674 23.7104 15.4745C23.7104 17.0817 25.0133 18.3846 26.6204 18.3846Z"
      fill="black"
      stroke="#FFEDC8"
      strokeWidth="2.24"
      strokeMiterlimit={10}
    />
  </Wrapper>
);