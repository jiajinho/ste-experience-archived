import useEnvStore from 'stores/useEnvStore';
import useDebugModelStore from 'stores/webgl/useDebugModelStore';
import useOutlineMeshStore from 'stores/webgl/useOutlineMeshStore';

const getMeshes = (object: THREE.Object3D): THREE.Mesh[] => {
  const meshes: THREE.Mesh[] = [];

  if (object.children.length) {
    object.children.forEach(o => {
      meshes.push(...getMeshes(o) as THREE.Mesh[]);
    });
  }
  else if (object.type === "Mesh") {
    return [object] as THREE.Mesh[];
  }
  else {
    return [];
  }

  return meshes;
}

export default (ref: React.RefObject<THREE.Group>) => {
  const env = useEnvStore(state => state.env);

  const setDebugModelStore = useDebugModelStore(state => state.set);
  const setOutlineMeshStore = useOutlineMeshStore(state => state.set)

  const triggerMover = () => {
    if (!ref.current) return;
    if (env !== "development") return;

    setDebugModelStore(ref.current);
    setOutlineMeshStore(getMeshes(ref.current));
  }

  return triggerMover;
}