import useObjectMoverStore from 'store/useLevaMoverStore';
import useOutlineMeshStore from 'store/useOutlineMeshStore';

export default (ref: React.RefObject<THREE.Group>) => {
  const setObjectMoverTarget = useObjectMoverStore(state => state.set);
  const setOutlineTargets = useOutlineMeshStore(state => state.set)

  const triggerMover = () => {
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

  return triggerMover
}