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
        position={[-1.23, 0.2, 3.98]}
        rotation={[Math.PI, 0.3, 0]}
      />
    </>
  )
}