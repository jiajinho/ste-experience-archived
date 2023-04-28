import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default (light: React.RefObject<THREE.SpotLight>) => {

  useEffect(() => {
    if (!light.current) return;

    const ogIntensity = light.current.intensity;

    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 6 });

    timeline
      .to(light.current, {
        duration: 0.15,
        intensity: 0
      })
      .to(light.current, {
        duration: 0.15,
        intensity: ogIntensity
      })
      .to(light.current, {
        duration: 0.15,
        intensity: 0
      })
      .to(light.current, {
        duration: 0.15,
        intensity: ogIntensity
      });


    return () => {
      timeline.kill();
    }
  }, []);
}