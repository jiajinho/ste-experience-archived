import React from 'react';
import Soda from '@hellfire/components/Soda';

export default () => {
  return (
    <>
      <Soda position={[2.15, 0.01, -2.01]} />

      <Soda
        position={[-1.94, 0.02, 2.75]}
        rotation-y={-1.15}
      />

      <Soda
        position={[1.94, 0, 0.5]}
        rotation-y={1.91}
      />

      <Soda
        position={[1.53, 0, 0.93]}
        rotation-y={0.53}
      />
    </>
  )
}