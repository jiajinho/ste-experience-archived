import React from 'react';
import Chair from '@hellfire/components/Chair';

export default () => {
  return (
    <>
      <Chair.Ornamental
        position={[-2.75, 0.19, 1.4]}
        rotation={[1.54, -3.05, 0.32]}
      />

      <Chair.Ornamental
        position={[3.52, 0.38, 0.48]}
        rotation-y={0.2}
      />

      <Chair.Throne
        position={[0, 0.68, -1.57]}
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
        position={[1.0, 0.45, 0.56]}
        rotation-y={-0.38}
      />

      <Chair.Classic
        position={[0.83, 0.45, 1.43]}
        rotation-y={-0.97}
      />

      <Chair.Classic
        position={[-1.1, 0.45, 0.15]}
        rotation-y={-3.4}
      />
    </>
  )
}