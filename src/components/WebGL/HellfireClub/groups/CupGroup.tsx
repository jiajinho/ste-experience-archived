import React from 'react';
import Cup from '@hellfire/components/Cup';

export default () => {
  return (
    <>
      <Cup
        position={[2.95, 0.01, -2.57]}
        rotation={[1.13, 0.06, 0.97]}
      />

      <Cup
        position={[-2.45, 0.01, 2.34]}
        rotation={[1.36, 0, 0]}
      />

      <Cup
        position={[-0.32, 0.82, -0.67]}
      />

      <Cup
        position={[1.43, 0.018, 0.55]}
        rotation={[1.38, 0.01, -0.62]}
      />
    </>
  )
}