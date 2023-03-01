import React from 'react';
import BulletinSpotLight from './BulletinSpotLight';

export default () => {
  return (
    <>
      <ambientLight intensity={0.2} />

      <BulletinSpotLight />
    </>
  )
}