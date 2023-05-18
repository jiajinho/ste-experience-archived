import React from 'react';
import Curtain from '@hellfire/components/Curtain';

export default () => {
  return (
    <>
      <Curtain.Large
        position={[-3.14, 2.53, -2.76]}
        rotation-y={Math.PI / 2}
      />

      <Curtain.Large
        position={[-3.14, 2.52, 3.65]}
        rotation-y={Math.PI / 2}
      />

      <Curtain.Classic
        position={[2.57, 2.5, -4.8]}
      />

      <Curtain.Classic
        position={[4.15, 2.46, -3.13]}
        rotation-y={-Math.PI / 2}
      />

      <Curtain.Classic
        position={[-2.17, 2.52, -4.8]}
      />
    </>
  );
}