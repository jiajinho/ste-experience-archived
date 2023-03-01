import React from 'react';

import BulletinSpotLight from './BulletinSpotLight';
import TVSpotLight from './TVSpotLight';

export default () => {
  return (
    <>
      <ambientLight intensity={0.2} />

      <BulletinSpotLight />
      <TVSpotLight />
    </>
  )
}