import { useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

export default (material: THREE.MeshStandardMaterial, glow: boolean, color: number) => {
  useEffect(() => {
    material.toneMapped = false;
    material.emissive = new THREE.Color(color);
  }, []);

  useEffect(() => {
    gsap.to(material, {
      duration: 0.5,
      ease: "power2.out",
      emissiveIntensity: glow ? 4 : 0
    });
  }, [glow]);
}