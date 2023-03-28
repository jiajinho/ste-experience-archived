import { useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

import config from 'config';
import useCameraStore from 'stores/webgl/useCameraStore';

export default () => {
  const { canvas, cameraPan, camera, shadowCamera } = useCameraStore(state => state);

  useEffect(() => {
    if (!canvas) return;
    if (!camera) return;
    if (!shadowCamera) return;
    if (!cameraPan) return;

    let enablePan = false;
    let anchorX = 0;
    let anchorAlpha = config.defaultLookAt.alpha;
    let alpha = config.defaultLookAt.alpha;

    function handleMouseDown(e: MouseEvent) {
      enablePan = true;
      anchorX = e.pageX;
    }

    function handleMouseUp() {
      enablePan = false;
      anchorAlpha = alpha;
    }

    function handleMouseMove(e: MouseEvent) {
      if (!enablePan) return;
      if (!shadowCamera) return;
      if (!camera) return;

      const delta = e.pageX - anchorX;
      const scaleFactor = 0.001;

      const newAlpha = anchorAlpha + delta * scaleFactor;
      const origin = { alpha };

      const vec3 = new THREE.Vector3(
        -Math.sin(origin.alpha) * config.defaultLookAt.scale,
        config.defaultLookAt.y,
        -Math.cos(origin.alpha) * config.defaultLookAt.scale
      );

      shadowCamera.lookAt(vec3);

      const endQuaternion = new THREE.Quaternion();
      endQuaternion.setFromRotationMatrix(shadowCamera.matrix);

      const time = { t: 0 };

      gsap.to(time, {
        t: 1,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => {
          camera.quaternion.slerp(endQuaternion, time.t);
        }
      });

      alpha = newAlpha;
    }

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", handleMouseMove);
    }
  }, [camera, cameraPan]);
}