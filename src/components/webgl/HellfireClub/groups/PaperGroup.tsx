import React, { useMemo } from 'react';
import * as THREE from 'three';

import Paper from '@hellfire/components/Paper';
import { useTexture } from '@react-three/drei';

const mapUrl = "/static/texture/soda-dice-paper.jpg";

export default () => {
  const { map } = useTexture({ map: mapUrl });

  const paperMaterial = useMemo(() => {
    if (!map) return;
    map.flipY = false;

    return new THREE.MeshStandardMaterial({
      map,
      metalness: 0.1,
      roughness: 0.3
    });
  }, [map]);

  return (
    <>
      {/**Cabinet */}
      <Paper.Scribbled
        material={paperMaterial}
        position={[2.08, 0, -3.4]}
        rotation-y={1.15}
      />

      <Paper.Empty
        material={paperMaterial}
        position={[1.94, 0.01, -3.5]}
        rotation-y={2.31}
      />

      <Paper.Yellow
        material={paperMaterial}
        position={[2.53, 0, -3.6]}
        rotation-y={-2.07}
      />

      {/**BulletinBoard */}
      <Paper.Crumpled
        material={paperMaterial}
        position={[-2.42, 0.02, -0.84]}
      />

      <Paper.Yellow
        material={paperMaterial}
        position={[-2.66, 0, -1.2]}
        rotation-y={1.92}
      />

      <Paper.Crumpled
        material={paperMaterial}
        position={[-2.53, 0.02, -0.96]}
        rotation-y={1.83}
      />

      <Paper.Empty
        material={paperMaterial}
        position={[-2.3, 0, 0]}
        rotation-y={1.83}
      />

      <Paper.Scribbled
        material={paperMaterial}

        position={[-2.3, 0.005, -0.02]}
        rotation-y={2.02}
      />

      {/**RetroTV */}
      <Paper.Crumpled
        material={paperMaterial}
        position={[-2.91, 0.02, 2.14]}
      />

      <Paper.Crumpled
        material={paperMaterial}
        position={[-2.76, 0.02, 1.99]}
      />

      <Paper.Scribbled
        material={paperMaterial}
        position={[-1.45, 0.01, 3.14]}
        rotation-y={-0.61}
      />

      <Paper.Yellow
        material={paperMaterial}
        position={[-1.53, 0, 3.05]}
        rotation-y={-1.73}
      />

      {/**Lamp */}
      <Paper.Scribbled
        material={paperMaterial}
        position={[-1.76, 0, -4.28]}
        rotation-y={0.77}
      />

      <Paper.Crumpled
        material={paperMaterial}
        position={[-1.76, 0.1, -3.62]}
      />
    </>
  );
}