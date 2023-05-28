import React, { useEffect, useRef } from 'react';
import { LightColor } from 'config';

export default () => {
  const spotlight = useRef<THREE.SpotLight>(null);

  useEffect(() => {
    if (!spotlight.current) return;

    spotlight.current.target.position.set(5, -95, 55);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  return (
    <spotLight
      ref={spotlight}
      castShadow
      angle={0.38}
      penumbra={1}
      position={[-2.24, 3.32, 1.26]}
      intensity={6}
      distance={5}
      color={LightColor.Cyan}
    />
  )
}