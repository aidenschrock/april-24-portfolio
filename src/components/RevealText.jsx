"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function RevealText() {
  gsap.registerPlugin(ScrollTrigger);

  const triggerRef = useRef();
  const [lettersRef, setlettersRef] = useArrayRef();

  const text = "Ready to embark on a journey to redefine your online identity?";

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 85%",
      },
      color: "white",
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, []);

  return (
    <>
      <div className="px-4 py-72 flex">
        <h2
          id="splitType"
          ref={triggerRef}
          className="text-6xl font-dirty sm:text-8xl lg:text-[8rem] xl:text-[9rem] leading-[5rem]  lg:leading-[8rem] xl:leading-[10rem] text-slate-800 mx-auto   max-w-7xl"
        >
          {text.split("").map((letter, index) => (
            <span className="reveal-text" key={index} ref={setlettersRef}>
              {letter}
            </span>
          ))}
        </h2>
      </div>
    </>
  );
}

export default RevealText;
