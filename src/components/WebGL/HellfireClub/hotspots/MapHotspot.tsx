import React, { useEffect, useRef } from 'react';

import config from 'config';
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useRegisterHotspot from './hooks/useRegisterHotspot';
import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';
import useEnvStore from 'stores/useEnvStore';
import useCameraStore from 'stores/webgl/useCameraStore';

import Map from '@hellfire/components/Map';
import WireframeBox from '@webgl/debug/WireframeBox';

export default (props: JSX.IntrinsicElements["group"]) => {
  /**
   * Hooks
   */
  const currentZoom = useCameraStore(state => state.currentZoom);
  const env = useEnvStore(state => state.env);

  const ref = useRef<THREE.Group>(null);
  const cameraBox = useRef<THREE.Mesh>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const triggerModelControl = useTriggerDebugModel(ref);

  const triggerZoom = useRegisterHotspot("map");

  /**
   * Not hook
   */
  const handleClick = () => {
    triggerModelControl();
    triggerZoom();
  }

  const handleCallToAction = () => {
    if (currentZoom !== 'map') {
      triggerZoom();
    }
    else {
      window.open(config.link.eventLocation, "_blank");
    }
  }

  /**
   * Render
   */
  return (
    <group ref={ref} {...props}>
      <Map
        onClick={handleClick}
        onCallToAction={handleCallToAction}
      />

      {env === "development" &&
        <WireframeBox.Camera
          ref={cameraBox}
          target={cameraTarget}
          position={[0, 0.4, 0]}
          lookAt={[0, -1, 0]}
          hotspot="map"
        />
      }
    </group>
  )
}