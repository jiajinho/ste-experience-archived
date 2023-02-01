import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

import SpotLight from './SpotLight';

export default () => {
  const [toggle, setToggle] = useState(false);

  const spot1 = useRef<THREE.SpotLight>(null);
  const spot2 = useRef<THREE.SpotLight>(null);

  const timeline = useRef(gsap.timeline().pause());

  //@ts-ignore
  // useHelper(light, THREE.SpotLightHelper, "cyan");

  useEffect(() => {
    setToggle(!toggle);
  }, []);

  useEffect(() => {
    timeline.current
      .to(spot1.current, {
        duration: 0.2,
        ease: "power2.out",
        power: 1,
      })
      .to(spot1.current, {
        duration: 0.2,
        ease: "power2.out",
        power: 10,
      })
      .repeat(1);

    const t = setInterval(() => {
      timeline.current.seek(0).play();
    }, 5000);

    return () => { clearInterval(t) }
  }, []);

  return (
    <>
      <SpotLight
        ref={spot1}
        position={[-2.85, 11.1, -3.76]}
        penumbra={1}
        intensity={10}
        power={10}
        distance={16}
        color={"#ffd4d4"}
      />

      <SpotLight
        ref={spot2}
        position={[5.62, 11.1, 5.93]}
        penumbra={1}
        intensity={10}
        power={10}
        distance={16}
        color={"#ffd4d4"}
      />
    </>
  );
}