import React, { useRef } from 'react';
import { ThreeEvent } from '@react-three/fiber';

import useMover from '../../hooks/useMover';
import Bar from './Bar';
import Bulb from './Bulb';

export default (props: JSX.IntrinsicElements["group"]) => {

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
        light={0xff0000}
      />

      <Bulb
        position={[0.09, -0.47, 0.97]}
      />

      <Bulb
        position={[0.09, -0.47, 0.73]}
        light={0x00ff00}
      />

      <Bulb
        position={[0.09, -0.47, 0.49]}
      />

      <Bulb
        position={[0.09, -0.47, 0.25]}
      />

      <Bulb
        position={[0.09, -0.47, 0.01]}
      />

      <Bulb
        position={[0.09, -0.47, -0.23]}
      />

      <Bulb
        position={[0.09, -0.47, -0.47]}
      />

      <Bulb
        position={[0.09, -0.47, -0.71]}
      />

      <Bulb
        position={[0.09, -0.47, -0.95]}
      />

      <Bulb
        position={[0.09, -0.47, -1.19]}
      />
    </group>
  );
}