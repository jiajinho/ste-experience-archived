import useHoverHotspotStore, { State } from '@/stores/webgl/useHoverHotspotStore';

export default (key: keyof State) => {
  const set = useHoverHotspotStore(state => state.set);

  const onPointerEnter = () => {
    set(key, true);
  }

  const onPointerLeave = () => {
    set(key, false);
  }

  return { onPointerEnter, onPointerLeave };
}