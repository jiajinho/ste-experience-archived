import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGLTF } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useDebug from "../hooks/useDebug";

const url = "/static/gltf/rift.glb";

type GLTFResult = GLTF & {
  nodes: {
    Rift: THREE.Mesh;
  },
  materials: {
    Rift: THREE.MeshStandardMaterial;
  }
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!materials) return;

    materials.Rift.toneMapped = false;
    materials.Rift.metalness = 0.3;
    materials.Rift.roughness = 0.2;
    materials.Rift.emissiveIntensity = 10;

    const tween = gsap.to(materials.Rift, {
      duration: 2.5,
      ease: "power2.inOut",
      emissiveIntensity: 30,
      yoyo: true,
      repeat: -1,
    });

    return () => { tween.kill() }
  }, [materials]);

  const triggerMover = useDebug(ref);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
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
      <mesh
        geometry={nodes.Rift.geometry}
        material={materials.Rift}
      />
    </group>
  );
}

useGLTF.preload(url);