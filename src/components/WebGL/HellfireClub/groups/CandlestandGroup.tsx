import React from 'react';
import Candlestand from '@hellfire/components/Candlestand';

export default () => {
  return (
    <>
      <Candlestand
        position={[-0.38, 0.1, 3.92]}
        rotation={[-1.54, 0, 0.83]}
      />

      <Candlestand
        position={[-2.68, 0, -2.13]}
      />

      <Candlestand
        position={[0.88, 0.08, -2.38]}
        rotation={[-1.54, 0.1, -0.43]}
      />
    </>
  );
}