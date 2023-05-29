import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default (active: boolean) => {
  const refs = useRef<HTMLPictureElement[]>([]);

  useEffect(() => {
    if (!refs.current) return;
    if (!refs.current.length) return;

    gsap.fromTo([...refs.current], {
      autoAlpha: active ? 0 : 1,
      y: active ? 30 : 0
    }, {
      duration: active ? 0.25 : 0.1,
      ease: "power2.out",
      stagger: active ? 0.05 : 0.03,
      autoAlpha: active ? 1 : 0,
      y: 0,
      overwrite: true
    });
  }, [active]);

  refs.current = []

  const addRef = (dom: HTMLPictureElement | null) => {
    if (dom) refs.current.push(dom);
  }

  return addRef;
}