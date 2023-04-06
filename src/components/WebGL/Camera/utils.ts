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

  const startQuaternion = camera.quaternion.clone();
  const endQuaternion = new THREE.Quaternion().setFromEuler(shadowCamera.rotation);

  const time = { t: 0 };

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
    .to(time, {
      t: 1,
      onUpdate: () => {
        camera.quaternion.slerpQuaternions(startQuaternion, endQuaternion, time.t);
      }
    }, 0)
    .eventCallback("onComplete", () => {
      callback && callback();

      camera.up = up;
      camera.lookAt(lookAt);
    });
}