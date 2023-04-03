import React, { useRef } from 'react';

import VecnaBoard from '@hellfire/components/VecnaBoard';
import WireframeBox from '@webgl/debug/WireframeBox';
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useRegisterHotspot from './useRegisterHotspot';

export default (props: JSX.IntrinsicElements["group"]) => {
  const ref = useRef<THREE.Group>(null);
  const cameraBox = useRef<THREE.Mesh>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const triggerModelControl = useTriggerDebugModel(ref);

  const triggerZoom = useRegisterHotspot("vecnaBoard", cameraBox, cameraTarget);

  const handleClick = () => {
    triggerModelControl();
    triggerZoom();
  }

  return (
    <group {...props}>
      <VecnaBoard onClick={handleClick} />

      <WireframeBox.Camera
        ref={cameraBox}
        target={cameraTarget}
        position={[0, 1, 0]}
        lookAt={[0, -1, 0]}
      />
    </group>
  )
}