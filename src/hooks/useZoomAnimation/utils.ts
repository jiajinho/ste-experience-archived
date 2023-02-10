import gsap from "gsap";

import type { Camera } from "types";
import config from "config";

export function zoomOut(camera: THREE.Camera, data: Camera) {
  gsap.timeline()
    .to(camera.position, {
      duration: config.zoomDuration,
      ease: "power2.out",
      x: data.position[0],
      y: data.position[1],
      z: data.position[2]
    })
    .to(camera.rotation, {
      duration: config.zoomDuration,
      ease: "power2.out",
      x: data.rotation[0],
      y: data.rotation[1],
      z: data.rotation[2]
    }, "0");
}

export function zoomToVintageTV(camera: THREE.Camera) {
  gsap.timeline()
    .to(camera.position, {
      duration: config.zoomDuration,
      ease: "power2.out",
      x: -8.9,
      y: 3.5,
      z: 11.21,
    })
    .to(camera.rotation, {
      duration: config.zoomDuration,
      ease: "power2.out",
      x: 0,
      y: 1.57,
      z: 0
    }, "0");
}