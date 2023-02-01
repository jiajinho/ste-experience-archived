import React, { useRef } from 'react';
import { SpotLight } from 'three';
import { SpotLightProps } from '@react-three/fiber';

export default React.forwardRef((
  props: Omit<SpotLightProps, "position" | "target"> & { position: [number, number, number] },
  ref: React.ForwardedRef<SpotLight>
) => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <>
      <spotLight
        ref={ref}
        {...props}
        target={meshRef.current || undefined}
      />
      <mesh
        ref={meshRef}
        position={[props.position[0], 0, props.position[2]]}
      />
    </>
  );
});