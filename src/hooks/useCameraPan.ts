import { useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

import config from 'config';
import useCameraStore from 'stores/webgl/useCameraStore';

export default (canvas: React.RefObject<HTMLDivElement>) => {
  const cameraPan = useCameraStore(state => state.cameraPan);

  const camera = useCameraStore(state => state.camera);
  const shadowCamera = useCameraStore(state => state.shadowCamera);

  useEffect(() => {
    console.log(cameraPan);

    if (!camera) return;
    if (!shadowCamera) return;
    if (!cameraPan) return;

    console.log(cameraPan);

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
        duration: 10,
        ease: "power2.out",
        onUpdate: () => {
          camera.quaternion.slerp(endQuaternion, time.t);
        }
      });

      alpha = newAlpha;
    }

    canvas.current?.addEventListener("mousedown", handleMouseDown);
    canvas.current?.addEventListener("mouseup", handleMouseUp);
    canvas.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.current?.removeEventListener("mousedown", handleMouseDown);
      canvas.current?.removeEventListener("mouseup", handleMouseUp);
      canvas.current?.removeEventListener("mousemove", handleMouseMove);
    }
  }, [camera, cameraPan]);
}