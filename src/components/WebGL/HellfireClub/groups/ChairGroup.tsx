import React from 'react';
import Chair from '@hellfire/components/Chair';

export default () => {
  return (
    <>
      <Chair.Ornamental
        position={[-2.75, 0.27, 1.4]}
        rotation={[1.54, -3.05, 0.32]}
        scale={1.35}
      />

      <Chair.Throne
        position={[0.08, 0.68, -1.57]}
        rotation={[0, -0.08, 0]}
      />

      <Chair.Classic
        position={[-0.7, 0.25, 1.6]}
        rotation={[0, -2.33, -1.54]}
      />

      <Chair.Classic
        position={[1.12, 0.45, -0.31]}
        rotation-y={0.1}
      />

      <Chair.Classic
        position={[0.99, 0.45, 1.44]}
        rotation-y={-0.67}
      />

      <Chair.Classic
        position={[-1.1, 0.45, 0.15]}
        rotation-y={-3.4}
      />

      <Chair.Classic
        position={[-0.92, 0.42, -0.86]}
        rotation={[0, 2.54, 0]}
      />
    </>
  )
}