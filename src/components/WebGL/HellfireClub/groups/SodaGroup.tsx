import React from 'react';
import Soda from '@hellfire/components/Soda';

export default () => {
  return (
    <>
      <Soda position={[2.15, 0.01, -2.01]} />

      <Soda
        position={[-1.94, 0.01, 2.75]}
        rotation={[0, -1.15, 0]}
      />
    </>
  )
}