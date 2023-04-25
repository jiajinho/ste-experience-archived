import React from 'react';

import RoomCrimsonLight from './components/RoomCrimsonLight';
import RiftLights from './components/RiftLights';
import SampleLight from './components/SampleLight';
import Light2 from './components/Light2';
import Light3 from './components/Light3';

export default () => (
  <>
    <ambientLight intensity={0.1} />

    <RoomCrimsonLight />
    <RiftLights />

    <SampleLight />
    <Light2 />
    <Light3 />
  </>
);