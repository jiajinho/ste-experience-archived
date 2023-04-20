import React from 'react';
import { Html } from '@react-three/drei';
import styled from 'styled-components';

import Tiktok, { Wrapper as $Tiktok } from '@html/common/svg/Tiktok';

const videoUrl = "/static/ste-encounter.mp4#t=0.001";

const VideoContainer = styled.div`
  position: relative;
  background: black;
  width: 1160px;
  height: 910px;

  & video {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 80%;
  }
`;

const IconContainer = styled.div`
  cursor: pointer;

  ${$Tiktok} { width: 60px }
`;

export default ({ onTiktokClick }: {
  onTiktokClick?: () => void
}) => {
  return (
    <>
      <Html
        prepend
        transform
        position={[0.1, 0, 0]}
        rotation-y={Math.PI / 2}
        scale={0.01}
      >
        <VideoContainer>
          <video controls autoPlay={false}>
            <source
              src={videoUrl}
              type="video/mp4"
            />
          </video>
        </VideoContainer>
      </Html>

      <Html
        prepend
        transform
        position={[0.127, 0.03, -0.24]}
        rotation-y={Math.PI / 2}
        scale={0.01}
      >
        <IconContainer onClick={onTiktokClick}>
          <Tiktok />
        </IconContainer>
      </Html>
    </>
  );
}