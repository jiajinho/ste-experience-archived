import React from 'react';

import RoomCrimsonLight from './components/RoomCrimsonLight';
import RiftLights from './components/RiftLights';

export default () => (
  <>
    <ambientLight intensity={0.1} />

    <RoomCrimsonLight />
    <RiftLights />
  </>
);