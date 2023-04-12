import React from "react";
import * as THREE from "three";

import Box from "./Box";
import Camera from "./Camera";

const Light = React.forwardRef((
  props: JSX.IntrinsicElements["mesh"],
  ref: React.ForwardedRef<THREE.Mesh>
) => {
  return <Box ref={ref} {...props} color="cyan" />
});

export default {
  Light,
  Camera
}