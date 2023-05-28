import React, { useRef } from 'react';

import config from 'config';
import useRegisterHotspot from '@webgl/HellfireClub/hotspots/hooks/useRegisterHotspot';
import WireframeBox from '@webgl/debug/WireframeBox';

export default () => {
  const ref = useRef<THREE.Group>(null);
  const cameraBox = useRef<THREE.Group>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  useRegisterHotspot("default", cameraBox, cameraTarget);

  const setting = config.zoomSettings.default;

  return (
    <group ref={ref}>
      <WireframeBox.Camera
        ref={cameraBox}
        target={cameraTarget}
        position={setting.cameraBox.position}
        lookAt={setting.cameraBox.lookAt}
        hotspot="default"
      />
    </group>
  )
}