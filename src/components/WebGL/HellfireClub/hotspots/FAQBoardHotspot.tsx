import React, { useRef } from 'react';

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useRegisterHotspot from './hooks/useRegisterHotspot';
import useEnvStore from 'stores/useEnvStore';

import FAQBoard from '../components/FAQBoard';
import WireframeBox from '@webgl/debug/WireframeBox';

export default (props: JSX.IntrinsicElements["group"]) => {
  const env = useEnvStore(state => state.env);

  const ref = useRef<THREE.Group>(null);
  const cameraBox = useRef<THREE.Mesh>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const triggerModelControl = useTriggerDebugModel(ref);

  const triggerZoom = useRegisterHotspot("faqBoard", cameraBox, cameraTarget);

  const handleClick = () => {
    triggerModelControl();
    triggerZoom();
  }

  return (
    <group {...props}>
      <FAQBoard onClick={handleClick} />

      {env === "development" &&
        <WireframeBox.Camera
          ref={cameraBox}
          target={cameraTarget}
          position={[0, 1, 0]}
          lookAt={[0, -1, 0]}
        />
      }
    </group>
  )
}