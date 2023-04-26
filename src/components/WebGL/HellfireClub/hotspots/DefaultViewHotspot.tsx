import React, { useRef } from 'react';

import config from 'config';
import useEnvStore from 'stores/useEnvStore';
import useRegisterHotspot from '@webgl/HellfireClub/hotspots/hooks/useRegisterHotspot';
import WireframeBox from '@webgl/debug/WireframeBox';

export default () => {
  /**
   * Hooks
   */
  const env = useEnvStore(state => state.env);

  const ref = useRef<THREE.Group>(null);
  const cameraBox = useRef<THREE.Mesh>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  useRegisterHotspot("default");

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
      {env === "development" &&
        <WireframeBox.Camera
          ref={cameraBox}
          target={cameraTarget}
          position={[3.81, 2.29, 2.26]}
          lookAt={[
            -Math.sin(azimuth) * azimuthScaleFactor,
            lookAtY,
            -Math.cos(azimuth) * azimuthScaleFactor
          ]}
          hotspot="default"
        />
      }
    </group>
  )
}