import React from "react";
import Box from "./Box";

const Light = React.forwardRef((
  props: JSX.IntrinsicElements["mesh"],
  ref: React.ForwardedRef<THREE.Mesh>
) => {
  return <Box ref={ref} {...props} color="cyan" />
});

const Camera = React.forwardRef((
  props: JSX.IntrinsicElements["mesh"],
  ref: React.ForwardedRef<THREE.Mesh>
) => {
  return <Box ref={ref} {...props} color="hotpink" />
});

export default {
  Light,
  Camera
}