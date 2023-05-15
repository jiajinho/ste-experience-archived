import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default (material: THREE.MeshStandardMaterial, spotlight: React.RefObject<THREE.SpotLight>) => {

  useEffect(() => {
    if (!spotlight.current) return;

    const ogEmissiveIntensity = 20;

    material.emissiveIntensity = ogEmissiveIntensity;
    material.toneMapped = false;

    const timeline = gsap.timeline({
      ease: "power2.out",
      yoyo: true,
      repeat: -1,
      repeatDelay: 1.5
    });

    timeline.to(material, {
      duration: 3,
      emissiveIntensity: 4,
    }).to(spotlight.current, {
      duration: 3,
      intensity: 1
    }, 0);

    return () => { timeline.kill() }
  }, [material]);

}