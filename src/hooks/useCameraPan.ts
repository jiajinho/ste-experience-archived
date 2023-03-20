import { useEffect } from 'react';
import * as THREE from 'three';

import config from 'config';
import { moveCamera } from 'components/WebGL/Camera/utils';
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

      const delta = e.pageX - anchorX;
      const scaleFactor = 0.001;

      const newAlpha = anchorAlpha + delta * scaleFactor;
      const origin = { alpha };

      const vec3 = new THREE.Vector3(
        -Math.sin(origin.alpha) * config.defaultLookAt.scale,
        config.defaultLookAt.y,
        -Math.cos(origin.alpha) * config.defaultLookAt.scale
      );

      moveCamera({
        camera: camera!,
        shadowCamera: shadowCamera!,
        lookAt: vec3,
        cameraPosition: config.zoomSettings.default.cameraPosition!,
        animate: true
      });

      // gsap.to(origin, {
      //   duration: 1.5,
      //   alpha: newAlpha,
      //   ease: "power2.out",
      //   overwrite: true,
      //   onUpdate: () => {
      //     const vec3 = new THREE.Vector3(
      //       -Math.sin(origin.alpha) * config.defaultLookAt.scale,
      //       config.defaultLookAt.y,
      //       -Math.cos(origin.alpha) * config.defaultLookAt.scale
      //     );

      //     camera?.lookAt(vec3);
      //   },
      // });

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