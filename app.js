let controls;
let scene;
function animation() {
  //init controller
  controls = new ScrollMagic.Controller();
  //select
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelectorAll(".nav-header");
  //loop
  sliders.forEach((slide) => {
    const revealimg = document.querySelector(".reveal-img");
    const img = document.querySelector("img");
    const revealtext = document.querySelector(".reveal-text");
    //gsap
    const slidtl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    slidtl.fromTo(revealimg, { x: "0%" }, { x: "100%" });
    slidtl.fromTo(revealtext, { x: "0%" }, { x: "100%" }, "-=0.75");
    slidtl.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
    slidtl.fromTo(nav, { y: "-100%" }, { y: "0%" }, "-=0.5");
  });
}
animation();
