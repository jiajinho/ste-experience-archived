import React, { useEffect, useRef } from 'react';
import { SpotLight } from 'three';

import config from 'config';
import { LightColor } from '@webgl/config';
import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';
import useRegisterHotspot from './hooks/useRegisterHotspot';
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useEnvStore from 'stores/useEnvStore';
import useCameraStore from 'stores/webgl/useCameraStore';

import WireframeBox from '@webgl/debug/WireframeBox';
import ChalkBoard from '@hellfire/components/ChalkBoard';

export default (props: JSX.IntrinsicElements["group"]) => {
  /**
   * Hooks
   */
  const currentZoom = useCameraStore(state => state.currentZoom);
  const env = useEnvStore(state => state.env);

  const ref = useRef<THREE.Group>(null);
  const spotlight = useRef<SpotLight>(null);
  const lightBox = useRef<THREE.Mesh>(null);
  const cameraBox = useRef<THREE.Mesh>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const triggerSpotlightControl = useTriggerDebugSpotlight(spotlight, lightBox);
  const triggerModelControl = useTriggerDebugModel(ref);

  const triggerZoom = useRegisterHotspot("chalkBoard", cameraBox, cameraTarget);

  useEffect(() => {
    if (!spotlight.current) return;

    spotlight.current.target.position.set(-10, -25, -15);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  /**
   * Not hook
   */
  const handleClick = () => {
    triggerModelControl();
    triggerZoom();
  }

  const handleCallToAction = () => {
    if (currentZoom !== "chalkBoard") {
      triggerZoom();
    }
    else {
      window.open(config.link.ticketing, "_blank");
    }
  }

  /**
   * Render
   */
  return (
    <group ref={ref} {...props}>
      <ChalkBoard
        onClick={handleClick}
        onCallToAction={handleCallToAction}
      />

      <spotLight
        ref={spotlight}
        castShadow
        penumbra={1}
        position={[0, 1.77, 1]}
        angle={0.47}
        intensity={3.7}
        distance={4}
        color={LightColor.Crimson}
      />

      {env === "development" &&
        <>
          <WireframeBox.Light
            ref={lightBox}
            position={spotlight.current?.position}
            onClick={triggerSpotlightControl}
          />

          <WireframeBox.Camera
            ref={cameraBox}
            target={cameraTarget}
            position={[0, 0, 1.5]}
            lookAt={[0, 0, -1]}
          />
        </>
      }
    </group>
  )
}