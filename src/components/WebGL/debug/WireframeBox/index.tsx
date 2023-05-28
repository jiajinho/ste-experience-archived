import React from "react";
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