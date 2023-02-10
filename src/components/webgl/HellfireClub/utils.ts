import useObjectMoverStore from "store/useObjectMoverStore";
import useOutlineMeshStore from "store/useOutlineMeshStore";

export function applyObjectMover(group: THREE.Group | null, mesh: THREE.Mesh | null) {
  const setObjectMoverTarget = useObjectMoverStore.getState().set;
  const setOutlineTarget = useOutlineMeshStore.getState().set;

  setObjectMoverTarget(group);
  setOutlineTarget(mesh);
}

export function applyRef(refs: Array<React.ForwardedRef<THREE.Group> | React.MutableRefObject<THREE.Group>>, group: THREE.Group | null) {
  if (!group) return;

  refs.forEach(r => {
    if (typeof r === "function") {
      r(group);
    }
    else if (r !== null) {
      r.current = group;
    }
  });
}