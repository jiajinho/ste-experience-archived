import React from 'react';

import MeetingTable from '@hellfire/components/MeetingTable';
import Page from '../components/Page';
import Dossier from '../components/Dossier';

export default () => {
  return (
    <>
      <MeetingTable
        position={[0, 0.68, 0]}
      />

      <Page.Rafflesia
        position={[-0.28, 0.82, 0.56]}
        rotation-y={2.05}
      />

      <Page.Demogorgon
        position={[-0.25, 0.815, 0.33]}
        rotation-y={1.18}
      />

      <Page.Rafflesia
        position={[-0.26, 0.82, -0.01]}
        rotation-y={1.52}
      />

      <Page.Demogorgon
        position={[-0.29, 0.82, -0.19]}
        rotation-y={-1.78}
      />

      <Page.Demogorgon
        position={[0.26, 0.82, 0.53]}
        rotation-y={1.27}
      />

      <Page.Demogorgon
        position={[0.23, 0.82, -0.03]}
        rotation-y={4.38}
      />

      <Page.Rafflesia
        position={[0.27, 0.82, 0.2]}
        rotation-y={1.8}
      />

      <Page.Rafflesia
        position={[0.28, 0.82, -0.3]}
        rotation-y={4.78}
      />

      <Dossier
        position={[-0.25, 0.82, 0.76]}
        rotation-y={3.16}
      />

      <Dossier
        position={[0.26, 0.82, 0.72]}
        rotation-y={6.2}
      />
    </>
  )
}