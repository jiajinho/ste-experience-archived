import React from 'react';
import Rift from '@hellfire/components/Rift';

export default () => (
  <>
    <Rift
      position={[-3.18, 0.8, -0.23]}
      rotation={[-1.15, -Math.PI / 2, 0]}
    />

    <Rift
      position={[1.03, 2.22, -4.85]}
      rotation={[0, Math.PI, -0.38]}
      scale={1.1}

    />

    <Rift
      position={[-1, 3.45, -4.9]}
      rotation={[0, Math.PI, 0.76]}
      scale={0.8}
    />

    <Rift
      position={[-3.05, 1.94, 2.75]}
      rotation={[0, -Math.PI / 2, -0.38]}
      scale={0.4}
    />
  </>
)