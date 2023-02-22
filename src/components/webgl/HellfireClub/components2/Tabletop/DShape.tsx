import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../../useMover";

const url = "/static/gltf/dshape-tabletop.glb";

type GLTFResult = GLTF & {
  nodes: {
    DShapeTabletop: THREE.Mesh;
  };
  materials: {
    ["DShape.Tabletop"]: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  const { ref, onClick } = useMover(props);

  return (
    <group
      ref={ref}
      {...props}
      onClick={onClick}
      dispose={null}
    >
      <mesh
        geometry={nodes.DShapeTabletop.geometry}
        material={materials["DShape.Tabletop"]}
      />
    </group>
  );
}

useGLTF.preload(url);