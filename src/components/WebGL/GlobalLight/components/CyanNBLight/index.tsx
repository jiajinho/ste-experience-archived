import React, { useEffect, useRef } from 'react';

import { LightColor } from '@/config';
import useAnimation from './useAnimation';

export default () => {
  const spotlight = useRef<THREE.SpotLight>(null);

  useAnimation(spotlight);

  useEffect(() => {
    if (!spotlight.current) return;

    spotlight.current.target.position.set(-5, -45, 0);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  return (
    <spotLight
      ref={spotlight}
      castShadow
      angle={0.41}
      penumbra={1}
      position={[-2.42, 4.43, -2.05]}
      intensity={5.5}
      distance={9.66}
      color={LightColor.Cyan}
    />
  )
}