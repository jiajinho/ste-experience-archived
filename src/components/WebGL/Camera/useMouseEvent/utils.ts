import * as THREE from 'three';
import gsap from 'gsap';

import config from "config";
import useCameraStore from "stores/webgl/useCameraStore";
import { EventState } from "./types";

export function enableEvent(state: EventState, pageX: number) {
  state.enabled = true;
  state.anchorX = pageX;
}

export function executeEvent(state: EventState, pageX: number) {
  const { currentZoom, canvas } = useCameraStore.getState();
  const setting = config.zoomSettings[currentZoom];

  if (!state.enabled) return;
  if (!setting.allowEvent) return;
  if (!canvas) return;

  const minAzimuth = setting.allowEvent.props.azimuth.min + (setting.allowEvent.props.azimuth.vwMultiplier * canvas.clientWidth);
  const maxAzimuth = setting.allowEvent.props.azimuth.max - (setting.allowEvent.props.azimuth.vwMultiplier * canvas.clientWidth);

  if (setting.allowEvent.name === "rotate") {
    rotate(
      state,
      pageX,
      minAzimuth,
      maxAzimuth
    );
  }
}

function rotate(state: EventState, pageX: number, minAzimuth: number, maxAzimuth: number) {
  const { shadowCamera, camera, canvas, currentZoom } = useCameraStore.getState();
  const setting = config.zoomSettings[currentZoom];

  if (!shadowCamera) return;
  if (!camera) return;
  if (!canvas) return;
  if (!setting.allowEvent) return;
  if (setting.allowEvent.name !== "rotate") return;

  const delta = pageX - state.anchorX;
  const scaleFactor = 0.001;

  let newAzimuth = state.anchorAzimuth + delta * scaleFactor;

  if (newAzimuth >= maxAzimuth) {
    newAzimuth = maxAzimuth;
  }
  else if (newAzimuth <= minAzimuth) {
    newAzimuth = minAzimuth;
  }

  const vec3 = new THREE.Vector3(
    -Math.sin(state.azimuth) * setting.allowEvent.default.azimuthScaleFactor,
    setting.allowEvent.default.lookAtY,
    -Math.cos(state.azimuth) * setting.allowEvent.default.azimuthScaleFactor
  );

  shadowCamera.lookAt(vec3);

  const endQuaternion = new THREE.Quaternion();
  endQuaternion.setFromRotationMatrix(shadowCamera.matrix);

  const time = { t: 0 };

  gsap.to(time, {
    t: 1,
    duration: 1,
    ease: "power2.out",
    overwrite: true,
    onUpdate: () => {
      camera.quaternion.slerp(endQuaternion, time.t);
    },
  });

  state.azimuth = newAzimuth;
}