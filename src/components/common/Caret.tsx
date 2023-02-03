import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.svg(({ $deg }: {
  $deg: number
}) => `
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
  display: block;
  cursor: pointer;

  & path {
    transform: rotate(${$deg}deg);
    transform-origin: center;
  }
`);

type Direction = "up" | "down" | "left" | "right";

export default ({ direction, color = "red", ...props }: {
  direction: Direction,
  color?: string
} & Omit<JSX.IntrinsicElements["svg"], "ref">
) => {

  let deg = 0;

  switch (direction) {
    case "up":
      deg = -90;
      break;
    case "down":
      deg = 90;
      break;
    case "left":
      deg = 180;
  }

  return (
    <Wrapper
      {...props}
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $deg={deg}
    >
      <path
        d="M9 17.898C9 18.972 10.2649 19.546 11.0731 18.8388L17.3838 13.3169C18.1806 12.6197 18.1806 11.3801 17.3838 10.6829L11.0731 5.16108C10.2649 4.45388 9 5.02785 9 6.1018V17.898Z"
        fill={color}
      />
    </Wrapper>
  );
}