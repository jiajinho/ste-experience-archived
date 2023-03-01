import useObjectMoverStore from 'store/useDebugModelStore';
import useOutlineMeshStore from 'store/useOutlineMeshStore';

const getMeshes = (group: THREE.Group) => {
  const meshes: THREE.Mesh[] = [];

  group.children.forEach(c => {
    if (c.type === "Mesh") {
      meshes.push(c as THREE.Mesh);
    }
    else if (c.type === "Group") {
      meshes.push(...getMeshes(c as THREE.Group));
    }
  });

  return meshes;
}

export default (ref: React.RefObject<THREE.Group>) => {
  const setObjectMoverTarget = useObjectMoverStore(state => state.set);
  const setOutlineTargets = useOutlineMeshStore(state => state.set)

  const triggerMover = () => {
    if (!ref.current) return;

    setObjectMoverTarget(ref.current);
    setOutlineTargets(getMeshes(ref.current));
  }

  return triggerMover
}