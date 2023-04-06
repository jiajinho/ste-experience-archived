import React from 'react';
import styled from 'styled-components';
import useCameraStore from 'stores/webgl/useCameraStore';

export const Wrapper = styled.svg`
  aspect-ratio: 5/6;
  height: auto;
  width: auto;
  display: flex;
  
  pointer-events: auto;
  cursor: pointer;
`;

export default () => {
  const setCameraStore = useCameraStore(state => state.set);

  const goToDefaultView = () => {
    setCameraStore("currentZoom", "default");
  }

  return (
    <Wrapper
      width={50}
      height={60}
      viewBox="0 0 50 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={goToDefaultView}
    >
      <g clipPath="url(#clip0_986_555)">
        <path
          d="M24.58 60L0 45.91V14.09L24.58 0L49.16 14.09V45.9L24.58 59.99V60ZM1.2 45.21L24.58 58.62L47.96 45.21V14.79L24.58 1.38L1.2 14.79V45.22V45.21Z"
          fill="var(--color-cherry)"
        />
        <path
          d="M3.48999 43.88V16.12L24.58 4.03003L45.66 16.12V43.88L24.58 55.97L3.48999 43.88Z"
          fill="black"
        />
        <path
          d="M24.58 56.6601L2.90002 44.2301V15.7701L24.58 3.34009L46.26 15.7701V44.2301L24.58 56.6601ZM4.09002 43.5301L24.58 55.2801L45.07 43.5301V16.4601L24.58 4.72009L4.09002 16.4601V43.5301Z"
          fill="var(--color-cherry)"
        />
        <path
          d="M37.0799 42.94H11.8199V19.42H14.4899C16.1099 15.39 20.0599 12.71 24.4499 12.71C28.8399 12.71 32.7999 15.39 34.4099 19.42H37.0799V42.94ZM13.0099 41.74H35.8799V20.62H33.5699L33.4299 20.22C32.0899 16.44 28.4799 13.9 24.4399 13.9C20.3999 13.9 16.7899 16.44 15.4499 20.22L15.3099 20.62H12.9999V41.74H13.0099Z"
          fill="var(--color-bone)"
        />
        <path
          d="M34.45 40.3001H14.45V22.0501H16.47C17.08 18.2401 20.48 15.3401 24.45 15.3401C28.42 15.3401 31.82 18.2501 32.43 22.0501H34.45V40.3001ZM15.65 39.1001H33.25V23.2401H31.35L31.2999 22.6901C31 19.2301 27.99 16.5201 24.45 16.5201C20.91 16.5201 17.9 19.2301 17.6 22.6901L17.55 23.2401H15.65V39.1001Z"
          fill="var(--color-bone)"
        />
        <path
          d="M24.45 37.5399C20.89 37.5399 18 34.6499 18 31.0899C18 27.5299 20.89 24.6399 24.45 24.6399C28.01 24.6399 30.9 27.5299 30.9 31.0899C30.9 34.6499 28.01 37.5399 24.45 37.5399ZM24.45 25.8399C21.55 25.8399 19.2 28.1999 19.2 31.0899C19.2 33.9799 21.56 36.3399 24.45 36.3399C27.34 36.3399 29.7 33.9799 29.7 31.0899C29.7 28.1999 27.34 25.8399 24.45 25.8399Z"
          fill="var(--color-bone)"
        />
        <path
          d="M25.05 15.9399H23.85V25.2399H25.05V15.9399Z"
          fill="var(--color-bone)"
        />
        <path
          d="M24.5 31.95L19.77 27.53L20.59 26.66L24.41 30.23L27.85 26.29L28.75 27.08L24.5 31.95Z"
          fill="var(--color-bone)"
        />
      </g>
      <defs>
        <clipPath id="clip0_986_555">
          <rect width="49.15" height={60} fill="white" />
        </clipPath>
      </defs>
    </Wrapper>
  );
}