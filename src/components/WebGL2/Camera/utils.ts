import * as THREE from "three";
import gsap from "gsap";

import { Vector3 } from "types";

export function moveCamera({ camera, shadowCamera, lookAt, cameraPosition, animate }: {
  camera: THREE.Camera,
  shadowCamera: THREE.PerspectiveCamera,
  lookAt: THREE.Vector3,
  cameraPosition: Vector3,
  animate: boolean
}) {
  shadowCamera.position.x = cameraPosition[0];
  shadowCamera.position.y = cameraPosition[1];
  shadowCamera.position.z = cameraPosition[2];

  shadowCamera.lookAt(lookAt);

  const endRotation = new THREE.Euler().copy(shadowCamera.rotation);

  const timeline = gsap.timeline({
    defaults: {
      duration: animate ? 1.5 : 0,
      ease: "power2.out"
    }
  });

  timeline
    .to(camera.position, {
      x: cameraPosition[0],
      y: cameraPosition[1],
      z: cameraPosition[2]
    })
    .to(camera.rotation, {
      x: endRotation.x,
      y: endRotation.y,
      z: endRotation.z
    }, 0);
}