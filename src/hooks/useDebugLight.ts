import { useEffect } from 'react';
import { useControls } from 'leva';

import useDebugLightStore from 'store/useDebugLightStore';

export default (collapsed: boolean) => {
  const light = useDebugLightStore(state => state.light);
  const box = useDebugLightStore(state => state.box);

  const [{ x, y, z, tx, ty, tz, angle, power }, set] = useControls("useDebugLight", () => ({
    x: { min: -10, max: 10, value: 0, step: 0.01 },
    y: { min: -10, max: 10, value: 0, step: 0.01 },
    z: { min: -10, max: 10, value: 0, step: 0.01 },
    tx: { min: -100, max: 100, value: 0, step: 5 },
    ty: { min: -100, max: 100, value: -100, step: 5 },
    tz: { min: -100, max: 100, value: 0, step: 5 },
    angle: { min: 0, max: Math.PI / 2, value: 0, step: 0.01 },
    power: { min: 1, max: 10, step: 0.1, value: 1 }
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
      power: light.power
    });
  }, [light]);

  useEffect(() => {
    if (!light) return;
    if (!box) return;

    light.position.x = x;
    light.position.y = y;
    light.position.z = z;

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
    light.power = power;
  }, [angle, power]);
}