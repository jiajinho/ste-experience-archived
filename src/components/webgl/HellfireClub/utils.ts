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