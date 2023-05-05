import React from 'react';

import RoomCrimsonLight from './components/RoomCrimsonLight';
import CyanNBLight from './components/CyanNBLight';
import CyanShelfLight from './components/CyanShelfLight';
import CyanTVLight from './components/CyanTVLight';

export default () => (
  <>
    <ambientLight intensity={0.1} />

    <RoomCrimsonLight />

    <CyanNBLight />
    <CyanShelfLight />
    <CyanTVLight />
  </>
);