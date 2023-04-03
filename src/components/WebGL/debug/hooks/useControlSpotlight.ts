import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useHelper } from '@react-three/drei';
import { useControls } from 'leva';

import useDebugLightStore from 'stores/webgl/useDebugLightStore';

export default (collapsed: boolean) => {
  const light = useDebugLightStore(state => state.light);
  const box = useDebugLightStore(state => state.box);

  /**
   * Leva related
   */
  const [{ x, y, z, tx, ty, tz, angle, intensity, distance, color }, set] = useControls("useControlSpotlight", () => ({
    x: { min: -10, max: 10, value: 0, step: 0.01 },
    y: { min: -10, max: 10, value: 0, step: 0.01 },
    z: { min: -10, max: 10, value: 0, step: 0.01 },
    tx: { min: -100, max: 100, value: 0, step: 5 },
    ty: { min: -100, max: 100, value: -100, step: 5 },
    tz: { min: -100, max: 100, value: 0, step: 5 },
    angle: { min: 0, max: Math.PI / 2, value: 0, step: 0.01 },
    intensity: { min: 0, max: 10, step: 0.1, value: 1 },
    distance: { min: 0, max: 30, step: 1, value: 15 },
    color: "#ffffff"
  }), {
    collapsed
  });

  useEffect(() => {
    if (!light) return;

    set({
      x: light.position.x,
      y: light.position.y,
      z: light.position.z,
      tx: light.target.position.x,
      ty: light.target.position.y,
      tz: light.target.position.z,
      angle: light.angle,
      distance: light.distance,
      intensity: light.intensity,
      color: `#${light.color.getHexString()}`
    });
  }, [light]);

  useEffect(() => {
    if (!light) return;
    light.position.x = x;
    light.position.y = y;
    light.position.z = z;

    if (!box) return;
    box.position.x = x;
    box.position.y = y;
    box.position.z = z;
  }, [x, y, z]);

  useEffect(() => {
    if (!light) return;

    light.target.position.x = tx;
    light.target.position.y = ty;
    light.target.position.z = tz;
    light.target.updateMatrixWorld();
  }, [tx, ty, tz]);

  useEffect(() => {
    if (!light) return;

    light.angle = angle;
    light.intensity = intensity;
    light.distance = distance;
    light.color.set(color);
  }, [angle, distance, color, intensity]);


  /**
   * 3js, light helper related
   */
  const ref = useRef<THREE.SpotLight | null>(null);

  const [toggle, setToggle] = useState(false);

  //@ts-ignore
  useHelper(toggle && ref, THREE.SpotLightHelper, "cyan");

  useEffect(() => {
    setToggle(false);
  }, [light]);

  useEffect(() => {
    setToggle(true);
    ref.current = light;
  }, [toggle]);
}