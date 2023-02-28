import React, { useRef } from 'react';
import { ThreeEvent } from '@react-three/fiber';

import { Tuple } from 'types';
import useMover from '../../hooks/useMover';
import Bar from './Bar';
import Bulb from './Bulb';
import { LightColor } from '../../config';

export default ({ lights, ...props }: {
  lights: Tuple<LightColor | undefined, 11>
} & JSX.IntrinsicElements["group"]
) => {
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useMover(ref);

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
        light={lights[0]}
      />

      <Bulb
        position={[0.09, -0.47, 0.97]}
        light={lights[1]}
      />

      <Bulb
        position={[0.09, -0.47, 0.73]}
        light={lights[2]}
      />

      <Bulb
        position={[0.09, -0.47, 0.49]}
        light={lights[3]}
      />

      <Bulb
        position={[0.09, -0.47, 0.25]}
        light={lights[4]}
      />

      <Bulb
        position={[0.09, -0.47, 0.01]}
        light={lights[5]}
      />

      <Bulb
        position={[0.09, -0.47, -0.23]}
        light={lights[6]}
      />

      <Bulb
        position={[0.09, -0.47, -0.47]}
        light={lights[7]}
      />

      <Bulb
        position={[0.09, -0.47, -0.71]}
        light={lights[8]}
      />

      <Bulb
        position={[0.09, -0.47, -0.95]}
        light={lights[9]}
      />

      <Bulb
        position={[0.09, -0.47, -1.19]}
        light={lights[10]}
      />
    </group>
  );
}