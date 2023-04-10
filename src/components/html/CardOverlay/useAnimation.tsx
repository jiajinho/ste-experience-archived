import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Event } from './types';

export default (
  event: Event,
  wrapper: React.RefObject<HTMLDivElement>,
  theEncounter: React.RefObject<HTMLDivElement>,
  whenWhere: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        ease: "power2.out"
      }
    });

    switch (event) {
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
          top: "150%"
        }).to(wrapper.current, {
          duration: 0.25,
          autoAlpha: 0
        });
    }
  }, [event]);
}