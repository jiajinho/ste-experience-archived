import React from 'react';
import Wall from '@hellfire/components/Wall';

export default () => (
  <>
    <Wall />

    <Wall
      rotation-y={Math.PI}
      position={[0.96, 0, -0.06]}
    />
  </>
);
