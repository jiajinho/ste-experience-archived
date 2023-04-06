import * as THREE from "three";
import gsap from "gsap";

import { Vector3 } from "types";

export function moveCamera({
  camera,
  shadowCamera,
  lookAt,
  cameraPosition,
  up = THREE.Object3D.DefaultUp,
  animate,
  callback
}: {
  camera: THREE.Camera,
  shadowCamera: THREE.PerspectiveCamera,
  lookAt: THREE.Vector3,
  cameraPosition: Vector3,
  up?: THREE.Vector3,
  animate: boolean,
  callback?: () => void
}) {
  shadowCamera.position.x = cameraPosition[0];
  shadowCamera.position.y = cameraPosition[1];
  shadowCamera.position.z = cameraPosition[2];

  shadowCamera.up = up;
  shadowCamera.lookAt(lookAt);

  const endRotation = new THREE.Euler().copy(shadowCamera.rotation);

  const timeline = gsap.timeline({
    defaults: {
      duration: animate ? 1.5 : 0,
      ease: "power2.out"
    }
  });

  console.log(endRotation);

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
    }, 0)
    .eventCallback("onComplete", () => {
      callback && callback();

      camera.up = up;
      camera.lookAt(lookAt);
    });
}

function getShortestRadian(to: number, from: number) {
  if (Math.abs(to - from) > Math.PI) {
    if (to > 0) { // if to is positive we remove a full-circle, add it otherwise
      return to - 2 * Math.PI;
    } else {
      return to + 2 * Math.PI;
    }
  }

  return to;
}