import React from 'react';

import BulletinSpotLight from './components/BulletinSpotLight';
import TVSpotLight from './components/TVSpotLight';

export default () => {
  return (
    <>
      <ambientLight intensity={0.2} />

      <BulletinSpotLight />
      <TVSpotLight />
    </>
  )
}