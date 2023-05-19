import React from 'react';
import CeilingLight from '../components/CeilingLight';

import materials from '../materials';

export default () => {
  return (
    <>
      <CeilingLight
        position={[-2.68, 4.13, 1.35]}
        materials={[
          materials.bulb.yellow,
          materials.bulb.none,
          materials.bulb.cyan,
          materials.bulb.none,
          materials.bulb.teal,
          materials.bulb.none,
          materials.bulb.cyan,
          materials.bulb.tangerine,
          materials.bulb.cyan,
          materials.bulb.none,
          materials.bulb.tangerine
        ]}
      />

      <CeilingLight
        position={[-2.68, 4.13, -1.35]}
        materials={[
          materials.bulb.yellow,
          materials.bulb.teal,
          materials.bulb.yellow,
          materials.bulb.cyan,
          materials.bulb.none,
          materials.bulb.none,
          materials.bulb.none,
          materials.bulb.yellow,
          materials.bulb.cyan,
          materials.bulb.tangerine,
          materials.bulb.none
        ]}
      />
    </>
  );
}