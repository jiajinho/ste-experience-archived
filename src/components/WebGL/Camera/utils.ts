import { Object3D, Vector3 as Vector3JS, Quaternion } from "three";
import gsap from "gsap";

import { Vector3 } from "@/types";

export function moveCamera({
  camera,
  shadowCamera,
  lookAt,
  cameraPosition,
  up = Object3D.DefaultUp,
  animate,
  callback
}: {
  camera: THREE.Camera,
  shadowCamera: THREE.PerspectiveCamera,
  lookAt: Vector3,
  cameraPosition: Vector3,
  up?: THREE.Vector3,
  animate: boolean,
  callback?: () => void
}) {
  const cameraLookAt = new Vector3JS(lookAt[0], lookAt[1], lookAt[2]);

  shadowCamera.position.x = cameraPosition[0];
  shadowCamera.position.y = cameraPosition[1];
  shadowCamera.position.z = cameraPosition[2];

  shadowCamera.up = up;
  shadowCamera.lookAt(cameraLookAt);

  const startQuaternion = camera.quaternion.clone();
  const endQuaternion = new Quaternion().setFromEuler(shadowCamera.rotation);

  const time = { t: 0 };

  const timeline = gsap.timeline({
    defaults: {
      duration: animate ? 1.5 : 0,
      ease: "power2.out",
      overwrite: true
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
      camera.lookAt(cameraLookAt);
    });
}