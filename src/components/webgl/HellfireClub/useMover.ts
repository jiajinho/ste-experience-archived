import { useRef } from 'react';
import { ThreeEvent } from '@react-three/fiber';

import useObjectMoverStore from 'store/useLevaMoverStore';
import useOutlineMeshStore from 'store/useOutlineMeshStore';

export default (props: JSX.IntrinsicElements["group"]) => {
  const ref = useRef<THREE.Group>(null);

  const setObjectMoverTarget = useObjectMoverStore(state => state.set);
  const setOutlineTargets = useOutlineMeshStore(state => state.set)

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    if (!ref.current) return;

    setObjectMoverTarget(ref.current);

    const meshs = ref.current.children as THREE.Mesh[];
    setOutlineTargets(meshs);

    props.onClick && props.onClick(e);
  }

  return { ref, onClick }
}