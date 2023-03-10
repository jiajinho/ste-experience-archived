import { useEffect } from "react";
import gsap from "gsap";

import useLoadingPhaseStore from "store/html/useLoadingPhaseStore";

export default (
  chars: React.RefObject<HTMLParagraphElement[]>,
  caret: React.RefObject<HTMLDivElement>,
  button: React.RefObject<HTMLButtonElement>,
  wrapper: React.RefObject<HTMLDivElement>
) => {
  const phase = useLoadingPhaseStore(state => state.typewriter);
  const set = useLoadingPhaseStore(state => state.set);

  useEffect(() => {
    switch (phase) {
      case "idle":
        gsap.to(wrapper.current, {
          duration: 0,
          zIndex: 1
        });

        gsap.to([chars.current, caret.current, button.current], {
          duration: 0,
          autoAlpha: 0,
          overwrite: true
        });
        break;


      case "start":
        const timeouts: NodeJS.Timeout[] = [];
        let pause = false;
        let delay = 0;

        const staggerFn = (_: any, target: HTMLParagraphElement) => {
          delay += (Math.random() * 0.1) + 0.03;

          if (pause) {
            delay += 0.6;
            pause = false;
          }

          if (target.innerHTML === ".") {
            pause = true;
          }

          const t = setTimeout(() => {
            const bound = target.getBoundingClientRect();

            caret.current!.style.left = `${bound.right + 1}px`;
            caret.current!.style.top = `${bound.top}px`;
            caret.current!.style.opacity = "1";
            caret.current!.style.visibility = "visible";
          }, delay * 1000);

          timeouts.push(t);

          return delay;
        }

        //Animate
        gsap.to(wrapper.current, {
          duration: 0,
          zIndex: 10
        });

        const tween = gsap
          .fromTo(chars.current, {
            autoAlpha: 0
          }, {
            duration: 0.01,
            autoAlpha: 1,
            stagger: staggerFn
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

        return () => {
          tween.kill();
          timeouts.forEach(t => clearTimeout(t));
        }


      case "end":
        gsap.to([chars.current, caret.current, button.current], {
          duration: 0.5,
          ease: "power2.out",
          autoAlpha: 0,
          overwrite: true
        }).eventCallback("onComplete", () => {
          wrapper.current!.style.zIndex = "1";
        });
        break;
    }
  }, [phase]);
}