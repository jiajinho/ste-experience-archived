import React from 'react';
import BulletinSpotLight from './BulletinSpotLight';

export default () => {
  return (
    <>
      <ambientLight intensity={0.3} />

      <BulletinSpotLight />
    </>
  )
}