import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useDebug from "../hooks/useDebug";
import useUpdateZoom, { Zoom } from "../hooks/useUpdateZoom";

const gltfUrl = "/static/gltf/book.glb";
const mapUrl = "/static/texture/dnd.jpg";

type GLTFResult = GLTF & {
  nodes: {
    Book: THREE.Mesh;
  }
};

export default ({ zoom, ...props }: {
  zoom: Zoom
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useDebug(ref);
  const triggerZoom = useUpdateZoom(ref, zoom);

  const { map } = useTexture({ map: mapUrl });
  map.flipY = false;

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    triggerZoom();
    triggerMover();
    props.onClick && props.onClick(e);
  }

  return (
    <group
      ref={ref}
      {...props}
      onClick={handleClick}
      dispose={null}
    >
      <mesh geometry={nodes.Book.geometry}>
        <meshStandardMaterial
          map={map}
          metalness={0.3}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);