import React, { useRef } from 'react';

import config from 'config';
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useRegisterHotspot from './hooks/useRegisterHotspot';
import useCameraStore from 'stores/webgl/useCameraStore';
import useHoverHomeEvent from './hooks/useHoverHomeEvent';
import useHoverHotspotEvent from './hooks/useHoverHotspotEvent';

import FAQBoard from '../components/FAQBoard';
import WireframeBox from '@webgl/debug/WireframeBox';

export default (props: JSX.IntrinsicElements["group"]) => {
  /**
   * Hooks
   */
  const currentZoom = useCameraStore(state => state.currentZoom);

  const ref = useRef<THREE.Group>(null);
  const cameraBox = useRef<THREE.Group>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const triggerModelControl = useTriggerDebugModel(ref);

  const triggerZoom = useRegisterHotspot("faqBoard", cameraBox, cameraTarget);

  const hoverEvent = {
    home: useHoverHomeEvent("layer2"),
    hotspot: useHoverHotspotEvent("layer1")
  }

  /**
   * Not hook
   */
  const setting = config.zoomSettings["faqBoard"];

  const handleClick = () => {
    triggerModelControl();
    triggerZoom();
  }

  const handleCallToAction = () => {
    if (currentZoom !== "faqBoard") {
      triggerZoom();
    }
    else {
      window.open(config.link.faq, "_blank");
    }
  }

  /**
   * Render
   */
  return (
    <group {...props}>
      <FAQBoard
        onClick={handleClick}
        onCallToAction={handleCallToAction}
        rotation-y={Math.PI}
        onCTAPointerEnter={hoverEvent.hotspot.onPointerEnter}
        onCTAPointerLeave={hoverEvent.hotspot.onPointerLeave}
        {...hoverEvent.home}
      />

      <WireframeBox.Camera
        ref={cameraBox}
        target={cameraTarget}
        position={setting.cameraBox.position}
        lookAt={setting.cameraBox.lookAt}
        hotspot="faqBoard"
      />
    </group>
  )
}