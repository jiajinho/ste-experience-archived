import { useRef } from 'react';
import { ThreeEvent } from '@react-three/fiber';

import useObjectMoverStore from 'store/useLevaMoverStore';
import useOutlineMeshStore from 'store/useOutlineMeshStore';

export default (props: JSX.IntrinsicElements["group"]) => {
  const ref = useRef<THREE.Group>(null);

  const setObjectMoverTarget = useObjectMoverStore(state => state.set);
  const setOutlineTargets = useOutlineMeshStore(state => state.set)

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    props.onClick && props.onClick(e);

    if (!ref.current) return;

    const meshes: THREE.Mesh[] = [];

    ref.current.children.forEach(c => {
      if (c.type === "Mesh") {
        meshes.push(c as THREE.Mesh);
      }
    });

    setObjectMoverTarget(ref.current);
    setOutlineTargets(meshes);
  }

  return { ref, onClick }
}