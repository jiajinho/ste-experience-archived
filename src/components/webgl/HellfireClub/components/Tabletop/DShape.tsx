import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../../useMover";

const gltfUrl = "/static/gltf/tabletop-dshape.glb";
const mapUrl = "/static/texture/wood.jpg";

type GLTFResult = GLTF & {
  nodes: {
    TabletopDShape: THREE.Mesh;
  };
  materials: {};
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;

  const { ref, onClick } = useMover(props);

  const { map } = useTexture({ map: mapUrl });
  map.flipY = false;

  return (
    <group
      ref={ref}
      {...props}
      onClick={onClick}
      dispose={null}
    >
      <mesh geometry={nodes.TabletopDShape.geometry}>
        <meshStandardMaterial
          roughness={0.8}
          map={map}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);