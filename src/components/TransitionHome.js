import React, { useEffect } from "react";
import gsap from "gsap";

function TransitionHome() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".top", {
      duration: 1.5,
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
      delay: 5,
    })
      .to(".bottom", {
        duration: 1.6,
        width: -0,
        ease: ".expo.inOut",
      })
      .to(".transition__home", { duration: 0, css: { display: "none" } });
  }, []);

  return (
    <div className="transition__home">
      <div className="transition__top">
        <div className="top"></div>
        <div className="top"></div>
      </div>
      <div className="transition__bottom">
        <div className="bottom"></div>
        {/* <div className="bottom"></div>
        <div className="bottom"></div>
        <div className="bottom"></div> */}
      </div>
    </div>
  );
}

export default TransitionHome;
