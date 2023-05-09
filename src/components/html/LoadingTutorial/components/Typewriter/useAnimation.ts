import { useEffect } from "react";
import gsap from "gsap";

import useLoadAnimationStore from "stores/html/useLoadAnimationStore";

export default (
  chars: React.RefObject<HTMLParagraphElement[]>,
  caret: React.RefObject<HTMLDivElement>,
  button: React.RefObject<HTMLButtonElement>,
  wrapper: React.RefObject<HTMLDivElement>,
  skip: React.RefObject<HTMLButtonElement>
) => {
  const phase = useLoadAnimationStore(state => state.typewriter);
  const set = useLoadAnimationStore(state => state.set);

  useEffect(() => {
    switch (phase) {
      case "standby":
        gsap.to(wrapper.current, {
          duration: 0.01,
          autoAlpha: 1
        });

        gsap.to([chars.current, caret.current, button.current, skip.current], {
          duration: 0.01,
          autoAlpha: 0
        });
        break;


      case "start":
        let count = 0;

        gsap.fromTo(skip.current, {
          autoAlpha: 0
        }, {
          duration: 0.01,
          autoAlpha: 1
        });

        //Animate
        const tween = gsap
          .fromTo(chars.current, {
            autoAlpha: 0
          }, {
            duration: 0.01,
            autoAlpha: 1,
            stagger: {
              each: 0.07,
              onComplete: function () {
                const bound = chars.current![count].getBoundingClientRect();
                caret.current!.style.left = `${bound.right + 1}px`;
                caret.current!.style.top = `${bound.top}px`;
                caret.current!.style.opacity = "1";
                caret.current!.style.visibility = "visible";

                count++;
              }
            }
          });

        tween.eventCallback("onComplete", () => {
          gsap.fromTo(caret.current, {
            autoAlpha: 1
          }, {
            delay: 0.6,
            duration: 0.01,
            repeatDelay: 0.6,
            autoAlpha: 0,
            yoyo: true,
            repeat: -1
          });

          gsap.to(button.current, {
            delay: 0.5,
            duration: 0.75,
            ease: "power2.out",
            autoAlpha: 1
          });
        });

        return () => { tween.kill() }


      case "skipped":
        gsap.to([chars.current, button.current], {
          duration: 0.01,
          autoAlpha: 1
        }).eventCallback("onComplete", () => {
          if (chars.current) {
            const bound = chars.current[chars.current.length - 1].getBoundingClientRect();
            caret.current!.style.left = `${bound.right + 1}px`;
            caret.current!.style.top = `${bound.top}px`;
          }

          gsap.fromTo(caret.current, {
            autoAlpha: 1
          }, {
            delay: 0.6,
            duration: 0.01,
            repeatDelay: 0.6,
            autoAlpha: 0,
            yoyo: true,
            repeat: -1
          });
        });

        gsap.to(skip.current, {
          duration: 0.01,
          autoAlpha: 0
        });
        break;


      case "end":
        let t: NodeJS.Timer;

        gsap.to([wrapper.current, caret.current], {
          duration: 0.5,
          ease: "power2.out",
          autoAlpha: 0,
          overwrite: true
        }).eventCallback("onStart", () => {
          set("ste", "end");
          set("mask", "cloudy");
        }).eventCallback("onComplete", () => {
          t = setTimeout(() => {
            set("card", "slide");
          }, 750);
        });

        gsap.to(skip.current, {
          duration: 0.01,
          autoAlpha: 0
        });

        return () => { clearTimeout(t) }
    }
  }, [phase]);
}