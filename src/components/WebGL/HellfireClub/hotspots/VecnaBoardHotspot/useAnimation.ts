import { useEffect } from "react";
import { gsap } from "gsap";

import config from "config";
import useCardStore from "stores/html/useCardStore";

export default (encounterCard: React.RefObject<THREE.Group>, whenWhereCard: React.RefObject<THREE.Group>) => {
  const webglEvent = useCardStore(state => state.webglEvent);
  const setCardStore = useCardStore(state => state.set);

  useEffect(() => {
    if (!encounterCard.current) return;
    if (!whenWhereCard.current) return;

    const timeline = gsap.timeline({
      defaults: { ease: "power2.out" }
    });

    switch (webglEvent) {
      case "the-encounter":
        timeline
          .to(encounterCard.current.position, {
            duration: 1,
            x: 0.5,
            y: 1,
            z: 0
          })
          .to(encounterCard.current.rotation, {
            duration: 0.75,
            y: 0
          }, 0)
          .call(() => {
            setCardStore("htmlEvent", "the-encounter");
          }, [], 0.35);
        break;
      case "when-where":
        timeline
          .to(whenWhereCard.current.position, {
            duration: 1,
            x: 0.5,
            y: 1,
            z: 0
          })
          .to(whenWhereCard.current.rotation, {
            duration: 0.75,
            y: 0,
          }, 0)
          .call(() => {
            setCardStore("htmlEvent", "when-where");
          }, [], 0.35);
        break;
      default:
        timeline
          .to(encounterCard.current.position, {
            duration: 1,
            x: config.cards.theEncounter.position[0],
            y: config.cards.theEncounter.position[1],
            z: config.cards.theEncounter.position[2]
          })
          .to(encounterCard.current.rotation, {
            duration: 1,
            x: 0,
            y: config.cards.theEncounter.rotateY
          }, 0)
          .to(whenWhereCard.current.position, {
            duration: 1,
            x: config.cards.whenWhere.position[0],
            y: config.cards.whenWhere.position[1],
            z: config.cards.whenWhere.position[2]
          }, 0)
          .to(whenWhereCard.current.rotation, {
            duration: 1,
            x: 0,
            y: config.cards.whenWhere.rotateY
          }, 0);
    }
  }, [webglEvent]);
}