import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const gltfUrl = "/static/gltf/vecna-board.glb";
const mapUrl = "/static/texture/vecna-texture.png";

type GLTFResult = GLTF & {
  nodes: {
    VecnaBoard: THREE.Mesh;
  };
};

export default ({ onCallToAction, ...props }: {
  onCallToAction?: () => void
} & JSX.IntrinsicElements["group"]
) => {
  const ref = useRef<THREE.Mesh>(null);
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;

  const { map } = useTexture({ map: mapUrl });
  map.flipY = false;

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        geometry={nodes.VecnaBoard.geometry}
        rotation={[0, Math.PI / 2, 0]}
      >
        <meshStandardMaterial
          map={map}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);