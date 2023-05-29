import { button, useControls } from 'leva';
import useLoadAnimationStore from '@/stores/html/useLoadAnimationStore';

export default () => {
  const set = useLoadAnimationStore(state => state.set);

  useControls({
    reset: button(() => {
      set("wrapper", "standby");
      set("mask", "dark");
      set("progress", "standby");
      set("ste", "standby");
      set("card", "standby");
      set("typewriter", "standby");
    }),
    play: button(() => {
      set("progress", "end");
    })
  });
}