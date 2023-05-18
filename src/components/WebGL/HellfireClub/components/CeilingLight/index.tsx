import React, { useRef } from 'react';
import { ThreeEvent } from '@react-three/fiber';

import { Tuple } from 'types';
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

import Bar from './Bar';
import Bulb from './Bulb';

export default ({ materials, ...props }: {
  materials: Tuple<THREE.Material, 11>
} & JSX.IntrinsicElements["group"]
) => {
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useTriggerDebugModel(ref);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    triggerMover();
    props.onClick && props.onClick(e);
  }

  return (
    <group
      ref={ref}
      {...props}
      onClick={handleClick}
      dispose={null}
    >
      <Bar />

      <Bulb
        position={[0.09, -0.47, 1.21]}
        material={materials[0]}
      />

      <Bulb
        position={[0.09, -0.47, 0.97]}
        material={materials[1]}
      />

      <Bulb
        position={[0.09, -0.47, 0.73]}
        material={materials[2]}
      />

      <Bulb
        position={[0.09, -0.47, 0.49]}
        material={materials[3]}
      />

      <Bulb
        position={[0.09, -0.47, 0.25]}
        material={materials[4]}
      />

      <Bulb
        position={[0.09, -0.47, 0.01]}
        material={materials[5]}
      />

      <Bulb
        position={[0.09, -0.47, -0.23]}
        material={materials[6]}
      />

      <Bulb
        position={[0.09, -0.47, -0.47]}
        material={materials[7]}
      />

      <Bulb
        position={[0.09, -0.47, -0.71]}
        material={materials[8]}
      />

      <Bulb
        position={[0.09, -0.47, -0.95]}
        material={materials[9]}
      />

      <Bulb
        position={[0.09, -0.47, -1.19]}
        material={materials[10]}
      />
    </group>
  );
}