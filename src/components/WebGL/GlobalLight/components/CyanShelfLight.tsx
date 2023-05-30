import React, { useEffect, useRef } from 'react';
import { LightColor } from '@/config';

export default () => {
  const spotlight = useRef<THREE.SpotLight>(null);

  useEffect(() => {
    if (!spotlight.current) return;

    spotlight.current.target.position.set(-15, -100, 20);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  return (
    <spotLight
      ref={spotlight}
      castShadow
      angle={0.38}
      penumbra={1}
      position={[2.42, 4.43, -2.05]}
      intensity={2}
      distance={8}
      color={LightColor.Cyan}
    />
  )
}