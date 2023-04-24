import { useEffect } from 'react';
import { gsap } from 'gsap';
import useCardStore from 'stores/html/useCardStore';

export default (
  wrapper: React.RefObject<HTMLDivElement>,
  theEncounter: React.RefObject<HTMLDivElement>,
  whenWhere: React.RefObject<HTMLDivElement>
) => {
  const htmlEvent = useCardStore(state => state.htmlEvent);
  const setCardStore = useCardStore(state => state.set);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: "power2.out" }
    });

    switch (htmlEvent) {
      case "when-where":
        timeline.to(wrapper.current, {
          duration: 0.25,
          autoAlpha: 1
        }).to(whenWhere.current, {
          duration: 0.75,
          top: "50%"
        });
        break;
      case 'the-encounter':
        timeline.to(wrapper.current, {
          duration: 0.25,
          autoAlpha: 1
        }).to(theEncounter.current, {
          duration: 0.75,
          top: "50%"
        });
        break;
      default:
        timeline.to([theEncounter.current, whenWhere.current], {
          duration: 0.5,
          top: "150%",
          overwrite: true
        }).to(wrapper.current, {
          duration: 0.25,
          autoAlpha: 0
        }).call(() => {
          setCardStore("webglEvent", undefined);
        }, [], 0.45);
    }
  }, [htmlEvent]);
}