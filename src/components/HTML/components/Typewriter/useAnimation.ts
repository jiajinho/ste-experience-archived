import { useEffect } from "react";
import gsap from "gsap";

import { AnimatePhase } from "./types";

export default (
  phase: AnimatePhase,
  chars: React.RefObject<HTMLParagraphElement[]>,
  caret: React.RefObject<HTMLDivElement>,
  button: React.RefObject<HTMLButtonElement>
) => {
  useEffect(() => {
    if (phase === "idle") {
      gsap.to(chars.current, {
        duration: 0,
        autoAlpha: 0,
        overwrite: true
      });

      gsap.to(caret.current, {
        duration: 0,
        autoAlpha: 0,
        overwrite: true
      });
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "start") {
      const timeouts: NodeJS.Timeout[] = [];

      let pause = false;
      let delay = 0;

      const staggerFn = (_: any, target: HTMLParagraphElement) => {
        delay += (Math.random() * 0.03) + 0.07;

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
    }
  }, [phase]);
}