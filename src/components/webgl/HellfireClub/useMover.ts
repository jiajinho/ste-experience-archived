import { useRef } from 'react';
import { ThreeEvent } from '@react-three/fiber';

import useObjectMoverStore from 'store/useObjectMoverStore';
import useOutlineMeshStore from 'store/useOutlineMeshStore';

export default (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null);

  const setObjectMoverTarget = useObjectMoverStore(state => state.set);
  const setOutlineTarget = useOutlineMeshStore(state => state.set)

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    setObjectMoverTarget(group.current);
    setOutlineTarget(mesh.current);

    props.onClick && props.onClick(e);
  }

  return {
    refs: { group, mesh },
    onClick
  }
}