import React from 'react';
import styled from 'styled-components';
import { IntrinsicHTML } from 'types';

export const Wrapper = styled.svg`
  aspect-ratio: 47/37;
  height: auto;
  width: auto;
  display: block;
`;

export default (props: IntrinsicHTML<"svg">) => (
  <Wrapper
    width={47}
    height={37}
    viewBox="0 0 47 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M45.6204 5.2948H1.62036V35.1048H45.6204V5.2948Z"
      stroke="#FFEDC8"
      strokeWidth="2.24"
      strokeMiterlimit={10}
    />
    <path
      d="M16.1304 0.204773V9.09476"
      stroke="#FFEDC8"
      strokeWidth="2.24"
      strokeMiterlimit={10}
    />
    <path
      d="M31.1104 0.204773V9.09476"
      stroke="#FFEDC8"
      strokeWidth="2.24"
      strokeMiterlimit={10}
    />
    <path
      d="M1.62036 13.7548H45.6204"
      stroke="#FFEDC8"
      strokeWidth="2.24"
      strokeMiterlimit={10}
    />
    <path
      d="M9.99048 21.3647H15.3305"
      stroke="#FFEDC8"
      strokeWidth="2.24"
      strokeMiterlimit={10}
    />
    <path
      d="M20.9504 21.3647H26.2904"
      stroke="#FFEDC8"
      strokeWidth="2.24"
      strokeMiterlimit={10}
    />
    <path
      d="M31.9204 21.3647H37.2504"
      stroke="#FFEDC8"
      strokeWidth="2.24"
      strokeMiterlimit={10}
    />
    <path
      d="M9.99048 27.0747H15.3305"
      stroke="#FFEDC8"
      strokeWidth="2.24"
      strokeMiterlimit={10}
    />
    <path
      d="M20.9504 27.0747H26.2904"
      stroke="#FFEDC8"
      strokeWidth="2.24"
      strokeMiterlimit={10}
    />
    <path
      d="M31.9204 27.0747H37.2504"
      stroke="#FFEDC8"
      strokeWidth="2.24"
      strokeMiterlimit={10}
    />
  </Wrapper>
);
