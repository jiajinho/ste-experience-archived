import React from 'react';
import Paper from '../components/Paper';

export default () => (
  <>
    {/**Cabinet */}
    <Paper.Scribbled
      position={[2.08, 0, -3.4]}
      rotation-y={1.15}
    />

    <Paper.Empty
      position={[1.94, 0.01, -3.5]}
      rotation-y={2.31}
    />

    <Paper.Yellow
      position={[2.53, 0, -3.6]}
      rotation-y={-2.07}
    />

    {/**BulletinBoard */}
    <Paper.Crumpled
      position={[-2.42, 0.02, -0.84]}
    />

    <Paper.Yellow
      position={[-2.66, 0, -1.2]}
      rotation-y={1.92}
    />

    <Paper.Crumpled
      position={[-2.53, 0.02, -0.96]}
      rotation-y={1.83}
    />

    <Paper.Empty
      position={[-2.3, 0, 0]}
      rotation-y={1.83}
    />

    <Paper.Scribbled
      position={[-2.3, 0.005, -0.02]}
      rotation-y={2.02}
    />

    {/**RetroTV */}
    <Paper.Crumpled
      position={[-2.91, 0.02, 2.14]}
    />

    <Paper.Crumpled
      position={[-2.76, 0.02, 1.99]}
    />

    <Paper.Scribbled
      position={[-1.45, 0.01, 3.14]}
      rotation-y={-0.61}
    />

    <Paper.Yellow
      position={[-1.53, 0, 3.05]}
      rotation-y={-1.73}
    />

    {/**Lamp */}
    <Paper.Scribbled
      position={[-1.76, 0, -4.28]}
      rotation-y={0.77}
    />

    <Paper.Crumpled
      position={[-1.76, 0.1, -3.62]}
    />
  </>
);
