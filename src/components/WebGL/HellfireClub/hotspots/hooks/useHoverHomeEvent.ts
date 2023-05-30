import useViewDefaultHoverStore, { State } from '@/stores/webgl/useHoverHomeStore';

export default (key: keyof State) => {
  const set = useViewDefaultHoverStore(state => state.set);

  const onPointerEnter = () => {
    set(key, true);
  }

  const onPointerLeave = () => {
    set(key, false);
  }

  return { onPointerEnter, onPointerLeave };
}