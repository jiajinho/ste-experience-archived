import { useEffect } from 'react';
import { useControls } from 'leva';

import useObjectMoverStore from 'store/useObjectMoverStore';

export default () => {
  const group = useObjectMoverStore(state => state.group);

  const [{ x, y, z }, set] = useControls("useObjectMover", () => ({
    x: { min: -20, max: 20, step: 0.01, value: 0 },
    y: { min: -20, max: 20, step: 0.01, value: 0 },
    z: { min: -20, max: 20, step: 0.01, value: 0 },
  }));

  useEffect(() => {
    if (!group) return;

    group.position.x = x;
    group.position.y = y;
    group.position.z = z;
  }, [x, y, z]);

  useEffect(() => {
    if (!group) return;

    set({
      x: group.position.x,
      y: group.position.y,
      z: group.position.z
    });
  }, [group, set]);
}