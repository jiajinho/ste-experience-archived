import React from "react";
import * as THREE from "three";

import type { Vector3 } from "types";
import Box from "./Box";
import { Line } from "@react-three/drei";
import useEnvStore from "stores/useEnvStore";

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
  const env = useEnvStore(state => state.env);

  const points = [];
  points.push(new THREE.Vector3(0, 0, 0));
  points.push(new THREE.Vector3(lookAt[0], lookAt[1], lookAt[2]));

  return (
    <group {...props}>
      <Box ref={ref} color="hotpink" />

      <Line
        color="hotpink"
        points={points}
        visible={env === "development"}
      />

      <group ref={target} position={lookAt} />
    </group>
  );
});

export default {
  Light,
  Camera
}