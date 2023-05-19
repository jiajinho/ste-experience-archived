import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import materials from "@webgl/HellfireClub/materials";

const gltfUrl = "/static/gltf/tabletop-dshape.glb";

type GLTFResult = GLTF & {
  nodes: {
    TabletopDShape: THREE.Mesh;
  }
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  return (
    <group ref={ref} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TabletopDShape.geometry}
        material={materials.wood}
      />
    </group>
  );
}

useGLTF.preload(gltfUrl);