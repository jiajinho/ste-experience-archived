import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../../useMover";

const url = "/static/glb/curtain-large.glb";

type GLTFResult = GLTF & {
  nodes: {
    Curtain_003: THREE.Mesh;
  };
  materials: {};
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  const { refs, onClick } = useMover(props);

  return (
    <group
      ref={refs.group}
      {...props}
      onClick={onClick}
      dispose={null}
    >
      <mesh
        ref={refs.mesh}
        geometry={nodes.Curtain_003.geometry}
        material={nodes.Curtain_003.material}
      />
    </group>
  );
}

useGLTF.preload(url);