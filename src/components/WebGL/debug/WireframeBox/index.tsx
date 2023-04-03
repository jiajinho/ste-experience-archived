import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { Line } from "@react-three/drei";

import type { Vector3 } from "types";
import useEnvStore from "stores/useEnvStore";
import useDebugCameraStore from "stores/webgl/useDebugCameraStore";
import useTriggerDebugCamera from "@webgl/debug/hooks/useTriggerDebugCamera";
import Box from "./Box";

const Light = React.forwardRef((
  props: JSX.IntrinsicElements["mesh"],
  ref: React.ForwardedRef<THREE.Mesh>
) => {
  return <Box ref={ref} {...props} color="cyan" />
});



const Camera = React.forwardRef(({ target, lookAt, ...props }: {
  target: React.RefObject<THREE.Group>,
  lookAt: Vector3,
} & Omit<JSX.IntrinsicElements["group"], "lookAt">,
  ref: React.ForwardedRef<THREE.Mesh>
) => {
  const box = useRef<THREE.Group>(null);

  const env = useEnvStore(state => state.env);

  const debug = {
    box: useDebugCameraStore(state => state.box),
    target: useDebugCameraStore(state => state.target),
    set: useDebugCameraStore(state => state.set)
  }

  const triggerControl = useTriggerDebugCamera(box, target);

  const points = useMemo(() => {
    const points: THREE.Vector3[] = [];
    points.push(new THREE.Vector3(0, 0, 0));

    if (!debug.target) {
      points.push(new THREE.Vector3(lookAt[0], lookAt[1], lookAt[2]));
    }
    else {
      points.push(debug.target.position);
    }

    return points;
  }, [JSON.stringify(debug.target?.position)]);

  const visibleLine = env === "development" && debug.box?.uuid === box.current?.uuid;

  return (
    <group
      ref={box}
      {...props}
      onClick={triggerControl}
    >
      <Box ref={ref} color="hotpink" />

      <Line
        color="hotpink"
        points={points}
        visible={visibleLine || false}
      />

      <group
        ref={target}
        position={lookAt}
      />
    </group>
  );
});

export default {
  Light,
  Camera
}