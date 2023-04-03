import React, { useRef } from 'react';

import config from 'config';
import WireframeBox from '@webgl/debug/WireframeBox';
import useRegisterHotspot from '@hellfire/hotspots/useRegisterHotspot';

export default () => {
  /**
   * Hooks
   */
  const ref = useRef<THREE.Group>(null);
  const cameraBox = useRef<THREE.Mesh>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  useRegisterHotspot("default", cameraBox, cameraTarget);

  /**
   * Not hook
   */
  const setting = config.zoomSettings.default;

  //Default lookAt prop
  const lookAtY = setting.allowEvent?.default.lookAtY || 0;
  const azimuth = setting.allowEvent?.default.azimuth || 0;
  const azimuthScaleFactor = setting.allowEvent?.default.azimuthScaleFactor || 0;

  /**
   * Render
   */
  return (
    <group ref={ref}>
      <WireframeBox.Camera
        ref={cameraBox}
        target={cameraTarget}
        position={[3.81, 2.29, 2.26]}
        lookAt={[
          -Math.sin(azimuth) * azimuthScaleFactor,
          lookAtY,
          -Math.cos(azimuth) * azimuthScaleFactor
        ]}
      />
    </group>
  )
}