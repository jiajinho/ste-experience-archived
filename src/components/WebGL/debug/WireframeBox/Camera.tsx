import React, { useRef } from "react";
import * as THREE from "three";
import { Line } from "@react-three/drei";

import { Camera, Vector3 } from "types";
import { applyRef } from "@webgl/HellfireClub/utils";
import useEnvStore from "stores/useEnvStore";
import useDebugCameraStore from "stores/webgl/useDebugCameraStore";
import useTriggerDebugCamera from "@webgl/debug/hooks/useTriggerDebugCamera";
import Box from "./Box";

export default React.forwardRef(({ target, lookAt, hotspot, ...props }: {
  target: React.RefObject<THREE.Group>,
  lookAt: Vector3,
  hotspot: Camera.Hotspot
} & Omit<JSX.IntrinsicElements["group"], "lookAt">,
  ref: React.ForwardedRef<THREE.Group>
) => {
  const box = useRef<THREE.Group>(null);

  const env = useEnvStore(state => state.env);

  const debug = {
    box: useDebugCameraStore(state => state.box),
    target: useDebugCameraStore(state => state.target),
    set: useDebugCameraStore(state => state.set)
  }

  const triggerControl = useTriggerDebugCamera(box, target, hotspot);

  const visibleLine = env === "development" && debug.box?.uuid === box.current?.uuid;

  return (
    <group
      ref={r => applyRef([ref, box], r)}
      {...props}
      onClick={triggerControl}
    >
      <Box color="hotpink" />

      <Line
        color="hotpink"
        points={[[0, 0, 0], lookAt]}
        visible={visibleLine || false}
      />

      <group
        ref={target}
        position={lookAt}
      />
    </group>
  );
});