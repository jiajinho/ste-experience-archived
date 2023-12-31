import React from 'react';
import styled from 'styled-components';
import { IntrinsicHTML } from '@/types';

export const Wrapper = styled.svg(({ $deg }: {
  $deg: number
}) => `
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
  display: block;
  cursor: pointer;

  path#arrow {
    transform-origin: center;
    transform: rotate(${$deg}deg);
  }
`);

export type Direction = "left" | "right";

export default ({ direction, ...props }: {
  direction: Direction
} & IntrinsicHTML<"svg">
) => {
  const deg = direction === "left" ? 180 : 0;

  return (
    <Wrapper
      {...props}
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $deg={deg}
    >
      <path
        d="M20 40C8.97 40 0 31.03 0 20C0 8.97 8.97 0 20 0C31.03 0 40 8.97 40 20C40 31.03 31.03 40 20 40ZM20 1.29C9.68 1.29 1.29 9.68 1.29 20C1.29 30.32 9.68 38.71 20 38.71C30.32 38.71 38.71 30.32 38.71 20C38.71 9.68 30.32 1.29 20 1.29Z"
        fill="var(--color-cherry)"
      />
      <path
        d="M20 37.4903C29.6595 37.4903 37.49 29.6597 37.49 20.0003C37.49 10.3408 29.6595 2.51025 20 2.51025C10.3405 2.51025 2.51001 10.3408 2.51001 20.0003C2.51001 29.6597 10.3405 37.4903 20 37.4903Z"
        fill="black"
      />
      <path
        d="M19.99 38.14C17.04 38.14 14.12 37.41 11.45 35.98C7.18004 33.69 4.05004 29.88 2.65004 25.26C-0.249964 15.69 5.18004 5.54004 14.75 2.65004C24.32 -0.249964 34.46 5.18004 37.36 14.75C40.26 24.32 34.83 34.46 25.26 37.36C23.53 37.88 21.76 38.14 20 38.14H19.99ZM15.12 3.88004C6.23004 6.57004 1.19004 15.99 3.88004 24.88C5.18004 29.18 8.08004 32.72 12.06 34.84C16.03 36.97 20.58 37.42 24.88 36.12C33.77 33.43 38.81 24.01 36.12 15.12C33.43 6.23004 24.01 1.19004 15.12 3.88004Z"
        fill="var(--color-cherry)"
      />
      <path
        id="arrow"
        d="M19.59 29.73H14.32C14.06 29.73 13.82 29.57 13.72 29.33C13.62 29.09 13.68 28.81 13.86 28.63L22.49 20L13.86 11.37C13.68 11.19 13.62 10.91 13.72 10.67C13.82 10.43 14.06 10.27 14.32 10.27H19.59C19.76 10.27 19.93 10.34 20.05 10.46L29.13 19.54C29.38 19.79 29.38 20.2 29.13 20.45L20.05 29.53C19.93 29.65 19.76 29.72 19.59 29.72V29.73ZM15.87 28.44H19.32L27.76 20L19.32 11.56H15.87L23.85 19.54C23.97 19.66 24.04 19.83 24.04 20C24.04 20.17 23.97 20.34 23.85 20.46L15.87 28.44Z"
        fill="white"
      />
    </Wrapper>
  );
}