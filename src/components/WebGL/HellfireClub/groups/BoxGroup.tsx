import React from 'react';

import Box from '@hellfire/components/Box';

export default () => {
  return (
    <>
      <Box
        position={[-1.3, 0.38, 4.44]}
        rotation={[0.1, -0.29, -1.53]}
      />

      <Box
        position={[-2.51, 0.13, -1.23]}
        rotation={[Math.PI / 2, 0, 0.56]}
      />

      <Box
        position={[2.77, 0.18, 1.84]}
        rotation={[Math.PI / 2, 0, 1.25]}
      />

      <Box
        position={[-1.23, 0.2, 3.98]}
        rotation={[Math.PI, 0.3, 0]}
      />
    </>
  )
}