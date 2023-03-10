import { button, useControls } from 'leva';
import useLoadingPhaseStore from 'store/html/useLoadingPhaseStore';

export default () => {
  const set = useLoadingPhaseStore(state => state.set);

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