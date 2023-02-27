import { useEffect } from 'react';
import { useControls } from 'leva';

import useLevaMoverStore from 'store/useLevaMoverStore';

export default () => {
  const group = useLevaMoverStore(state => state.group);

  const [{ x, y, z, rx, ry, rz }, set] = useControls("useLevaMover", () => ({
    x: { min: -5, max: 5, step: 0.01, value: 0 },
    y: { min: -5, max: 5, step: 0.01, value: 0 },
    z: { min: -5, max: 5, step: 0.01, value: 0 },
    rx: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    ry: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    rz: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 }
  }), {
    collapsed: false
  });

  useEffect(() => {
    if (!group) return;

    group.position.x = x;
    group.position.y = y;
    group.position.z = z;
    group.rotation.x = rx;
    group.rotation.y = ry;
    group.rotation.z = rz;
  }, [x, y, z, rx, ry, rz]);

  useEffect(() => {
    if (!group) return;

    set({
      x: group.position.x,
      y: group.position.y,
      z: group.position.z,
      rx: group.rotation.x,
      ry: group.rotation.y,
      rz: group.rotation.z,
    });
  }, [group, set]);
}