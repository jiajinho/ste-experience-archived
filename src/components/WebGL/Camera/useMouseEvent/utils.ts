import { Vector3, Quaternion } from 'three';
import gsap from 'gsap';

import config from "@/config";
import { clamp } from '@/utils';
import { EventState } from "./types";
import useCameraStore from "@/stores/webgl/useCameraStore";
import useMouseEventStore from '@/stores/webgl/useMouseEventStore';

export function resetEventState(state: EventState) {
  state.enabled = false;
  state.anchorX = 0;
  state.anchorAzimuth = config.zoomSettings.default.allowEvent?.default.azimuth.value || 0;
  state.azimuth = config.zoomSettings.default.allowEvent?.default.azimuth.value || 0;

  state.anchorY = 0;
  state.anchorPolar = config.zoomSettings.default.allowEvent?.default.polar.value || 0;
  state.polar = config.zoomSettings.default.allowEvent?.default.polar.value || 0;
}

export function enableEvent(state: EventState, pageX: number, pageY: number) {
  const currentZoom = useCameraStore.getState().currentZoom;
  const mouseEvent = useMouseEventStore.getState().event;

  if (currentZoom !== "default") return;
  if (!mouseEvent) return;

  state.enabled = true;
  state.anchorX = pageX;
  state.anchorY = pageY;
}

export function disableEvent(state: EventState) {
  state.enabled = false;
  state.anchorAzimuth = state.azimuth;
  state.anchorPolar = state.polar;
}

export function executeEvent(state: EventState, aspect: number, pageX: number, pageY: number) {
  const { currentZoom, canvas } = useCameraStore.getState();
  const setting = config.zoomSettings[currentZoom];

  if (!state.enabled) return;
  if (!setting.allowEvent) return;
  if (!canvas) return;

  let minAzimuth = setting.allowEvent.default.azimuth.value;
  let maxAzimuth = setting.allowEvent.default.azimuth.value;

  if (aspect <= setting.allowEvent.props.azimuth.aspect.max) {
    const range = setting.allowEvent.props.azimuth.aspect.constant / aspect;

    minAzimuth -= range;
    maxAzimuth += range;
  }

  const minPolar = setting.allowEvent.props.polar.min;
  const maxPolar = setting.allowEvent.props.polar.max;

  if (setting.allowEvent.name === "rotate") {
    rotate({
      state,
      pageX,
      pageY,
      azimuth: {
        min: minAzimuth,
        max: maxAzimuth
      },
      polar: {
        min: minPolar,
        max: maxPolar
      }
    });
  }
}

function rotate({ state, pageX, pageY, azimuth, polar }: {
  state: EventState,
  pageX: number,
  pageY: number,
  azimuth: {
    min: number,
    max: number
  },
  polar: {
    min: number,
    max: number
  }
}) {
  const { shadowCamera, camera, canvas, currentZoom } = useCameraStore.getState();
  const setting = config.zoomSettings[currentZoom];

  if (!shadowCamera) return;
  if (!camera) return;
  if (!canvas) return;
  if (!setting.allowEvent) return;
  if (setting.allowEvent.name !== "rotate") return;

  //azimuth
  const deltaX = pageX - state.anchorX;
  let newAzimuth = state.anchorAzimuth + deltaX * setting.allowEvent.props.azimuth.sensitivity;

  const maxAzimuthLimit = Math.min(azimuth.max, setting.allowEvent.props.azimuth.max);
  const minAzimuthLimit = Math.max(azimuth.min, setting.allowEvent.props.azimuth.min);

  newAzimuth = clamp(newAzimuth, minAzimuthLimit, maxAzimuthLimit);

  //polar
  const deltaY = pageY - state.anchorY;
  let newPolar = state.anchorPolar + deltaY * setting.allowEvent.props.polar.sensitivity;

  newPolar = clamp(newPolar, polar.min, polar.max);

  //transformation
  const vec3 = new Vector3(
    -Math.sin(state.azimuth) * setting.allowEvent.default.azimuth.scaleFactor,
    state.polar,
    -Math.cos(state.azimuth) * setting.allowEvent.default.azimuth.scaleFactor
  );

  shadowCamera.lookAt(vec3);

  const endQuaternion = new Quaternion();
  endQuaternion.setFromRotationMatrix(shadowCamera.matrix);

  const time = { t: 0 };

  gsap.to(time, {
    t: 1,
    duration: 0.1,
    ease: "power2.out",
    overwrite: true,
    onUpdate: () => {
      camera.quaternion.slerp(endQuaternion, time.t);
    },
  });


  state.azimuth = newAzimuth;
  state.polar = newPolar;
}