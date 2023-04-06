import React, { useEffect } from 'react';

export default (target: React.RefObject<THREE.Light>, box: React.RefObject<THREE.Mesh>) => {
  useEffect(() => {
    if (!target.current) return;
    if (!box.current) return;

    box.current.position.x = target.current.position.x;
    box.current.position.y = target.current.position.y;
    box.current.position.z = target.current.position.z;
  }, []);
}