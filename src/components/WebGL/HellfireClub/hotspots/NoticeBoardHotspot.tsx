import React, { useEffect, useRef } from 'react';

import { LightColor } from '@hellfire/config';
import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';
import useRegisterHotspot from '@webgl/HellfireClub/hotspots/hooks/useRegisterHotspot';
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useEnvStore from 'stores/useEnvStore';

import NoticeBoard from '@hellfire/components/NoticeBoard';
import WireframeBox from '@webgl/debug/WireframeBox';
import Polaroid from '../components/Polaroid';
import Sticker from '../components/Sticker';

export default (props: JSX.IntrinsicElements["group"]) => {
  /**
   * Hooks
   */
  const env = useEnvStore(state => state.env);

  const ref = useRef<THREE.Group>(null);
  const spotlight = useRef<THREE.SpotLight>(null);
  const lightBox = useRef<THREE.Mesh>(null);
  const cameraBox = useRef<THREE.Mesh>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const triggerSpotlightControl = useTriggerDebugSpotlight(spotlight, lightBox);
  const triggerModelControl = useTriggerDebugModel(ref);

  const triggerZoom = useRegisterHotspot("noticeBoard", cameraBox, cameraTarget);

  useEffect(() => {
    if (!spotlight.current) return;

    spotlight.current.target.position.set(-30, -35, 0);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  /**
   * Not hook
   */
  const handleClick = () => {
    triggerModelControl();
    triggerZoom();
  }

  /**
   * Render
   */
  return (
    <group ref={ref} {...props}>
      <NoticeBoard onClick={handleClick} />

      <Polaroid
        position={[0, 0.33, 0.44]}
      />

      <Polaroid
        position={[0, 0.3, 0.16]}
        rotation={[0.09, 0, 0]}
      />

      <Polaroid
        position={[0.015, 0.32, -0.15]}
        rotation={[-0.03, 0, 0]}
      />

      <Polaroid
        position={[0, 0.31, -0.45]}
        rotation={[0.14, 0, 0]}
      />

      <Polaroid
        position={[0.01, 0.02, 0.27]}
        rotation={[0.15, 0, 0]}
      />

      <Polaroid position={[0.02, 0.04, -0.09]} />

      <Polaroid
        position={[0.01, 0.06, -0.38]}
        rotation={[0.12, 0, 0]}
      />

      <Polaroid
        position={[0.015, -0.23, 0.07]}
        rotation={[-0.04, 0, 0]}
      />

      <Polaroid
        position={[0.025, -0.22, -0.22]}
        rotation={[-0.02, 0, 0]}
      />

      <Sticker.Cap position={[0.04, 0.45, -0.32]} />

      <Sticker.Hamburger
        position={[0.04, 0.16, 0.56]}
        rotation={[-0.2, 0, 0]}
      />

      <Sticker.ChocoCan
        position={[0.03, 0.37, 0.02]}
      />

      <Sticker.Flower
        position={[0.04, -0.36, 0.2]}
      />

      <Sticker.Camp
        position={[0, -0.03, -0.62]}
        rotation={[0.37, 0, 0]}
      />



      <spotLight
        ref={spotlight}
        penumbra={1}
        position={[1.52, 1.91, 0]}
        angle={0.49}
        intensity={2.6}
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
            position={[1.5, 0, 0]}
            lookAt={[-1, 0, 0]}
          />
        </>
      }
    </group>
  )
}