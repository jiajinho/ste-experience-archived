import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';

import Paper from '@hellfire/components/Paper';

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
      <Paper.White.Scribbled
        position={[2.08, 0, -3.4]}
        rotation-y={1.15}
      />

      <Paper.White.Empty
        position={[1.94, 0.01, -3.5]}
        rotation-y={2.31}
      />

      <Paper.Yellow
        material={paperMaterial}
        position={[2.53, 0, -3.6]}
        rotation-y={-2.07}
      />

      <Paper.White.Ball
        position={[2.13, 0.02, -0.84]}
      />

      <Paper.Yellow
        material={paperMaterial}
        position={[2.42, 0, -1.48]}
        rotation-y={1.92}
      />

      <Paper.White.Ball
        position={[2.06, 0.02, -1.14]}
        rotation-y={1.83}
      />

      <Paper.White.Empty
        position={[-2.3, 0, 0.53]}
        rotation-y={1.83}
      />

      <Paper.White.Scribbled
        position={[-2.4, 0.005, 0.48]}
        rotation-y={2.02}
      />

      <Paper.White.Ball
        position={[-2.91, 0.02, 2.14]}
      />

      <Paper.White.Ball
        position={[-2.76, 0.02, 1.99]}
      />

      <Paper.White.Scribbled
        position={[-1.45, 0.01, 3.14]}
        rotation-y={-0.61}
      />

      <Paper.Yellow
        material={paperMaterial}
        position={[-1.53, 0, 3.05]}
        rotation-y={-1.73}
      />

      <Paper.White.Scribbled
        position={[-1.76, 0, -4.28]}
        rotation-y={0.77}
      />

      <Paper.White.Ball
        position={[-1.76, 0.1, -3.62]}
      />
    </>
  );
}