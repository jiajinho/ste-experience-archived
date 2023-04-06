import { useEffect } from 'react';
import { useControls } from 'leva';

import useEnvStore from 'stores/useEnvStore';
import useDebugModelStore from 'stores/webgl/useDebugModelStore';
import useOutlineMeshStore from 'stores/webgl/useOutlineMeshStore';

export default (collapsed: boolean) => {
  const env = useEnvStore(state => state.env);

  const group = useDebugModelStore(state => state.group);
  const setOutline = useOutlineMeshStore(state => state.set);

  const [{ x, y, z, rx, ry, rz }, set] = useControls("useControlModel", () => ({
    x: { min: -5, max: 5, step: 0.01, value: 0 },
    y: { min: -5, max: 5, step: 0.01, value: 0 },
    z: { min: -5, max: 5, step: 0.01, value: 0 },
    rx: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    ry: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    rz: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 }
  }), {
    collapsed
  });

  useEffect(() => {
    if (env !== "development") {
      setOutline([]);
    }
  }, [env, setOutline]);

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