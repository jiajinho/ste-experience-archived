import React from 'react';
import useEnvStore from '@/stores/useEnvStore';

export default React.forwardRef(({ color, ...props }: {
  color: string,
} & JSX.IntrinsicElements["mesh"],
  ref: React.ForwardedRef<THREE.Mesh>
) => {
  const env = useEnvStore(state => state.env);

  return (
    <mesh
      ref={ref}
      {...props}
      visible={env === "development"}
    >
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
});
