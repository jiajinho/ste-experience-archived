import React, { useEffect, useRef } from 'react';

export default () => {
  const spotlight = useRef<THREE.SpotLight>(null);

  useEffect(() => {
    if (!spotlight.current) return;

    spotlight.current.target.position.set(0, 0, 0);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  return (
    <spotLight
      ref={spotlight}
      castShadow
      angle={0.79}
      penumbra={1}
      distance={15}
      position={[5, 5, 5]}
      intensity={0.7}
      color="#ff927c"
    />
  )
}