import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../../useMover";
import config from "../../config";

const url = "/static/gltf/curtain-classic.glb";

type GLTFResult = GLTF & {
  nodes: {
    CurtainClassic: THREE.Mesh;
  }
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  const { ref, onClick } = useMover(props);

  return (
    <group
      ref={ref}
      {...props}
      onClick={onClick}
      dispose={null}
    >
      <mesh
        geometry={nodes.CurtainClassic.geometry}
        material={config.curtainMaterial}
      />
    </group>
  );
}

useGLTF.preload(url);