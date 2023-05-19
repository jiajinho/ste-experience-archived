import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/paper-white-scribbled.glb";

type GLTFResult = GLTF & {
  nodes: {
    PaperWhiteScribbled: THREE.Mesh;
  };
  materials: {
    paper: THREE.MeshPhysicalMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  return (
    <group ref={ref} {...props}>
      <mesh
        geometry={nodes.PaperWhiteScribbled.geometry}
        material={materials.paper}
        scale={1.35}
      />
    </group>
  );
}

useGLTF.preload(url);