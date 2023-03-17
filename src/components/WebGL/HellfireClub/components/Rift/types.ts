import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export type GLTFResult = GLTF & {
  nodes: {
    Rift_A: THREE.Mesh;
    Rift_B: THREE.Mesh;
  };
  materials: {
    Rift: THREE.MeshStandardMaterial;
  };
};