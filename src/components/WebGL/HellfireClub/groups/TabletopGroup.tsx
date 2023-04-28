import React from 'react';

import MeetingTable from '@hellfire/components/MeetingTable';
import Page from '../components/Page';

export default () => {
  return (
    <>
      <MeetingTable
        position={[0, 0.68, 0]}
      />

      <Page.Demogorgon
        position={[-0.13, 0.825, 0.71]}
        rotation-y={3.45}
      />

      <Page.Rafflesia
        position={[-0.26, 0.82, 0.68]}
        rotation-y={-0.43}
      />
    </>
  )
}