let controls;
let scene;
let pagescene;
function animation() {
  //init controller
  controls = new ScrollMagic.Controller();
  //select
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");
  //loop
  sliders.forEach((slide, index, sliders) => {
    const revealimg = slide.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealtext = slide.querySelector(".reveal-text");
    //gsap
    const slidtl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    slidtl.fromTo(revealimg, { x: "0%" }, { x: "100%" });
    slidtl.fromTo(revealtext, { x: "0%" }, { x: "100%" }, "-=0.75");
    slidtl.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
    slidtl.fromTo(nav, { y: "-100%" }, { y: "0%" }, "-=0.5");
    scene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.25,
      reverse: false,
    })
      .setTween(slidtl)
      .addIndicators({
        colorStart: "white",
        colorTrigger: "white",
        name: "slide",
      })
      .addTo(controls);
    //new inmation
    const pagetl = gsap.timeline();
    let netxslides = sliders.length - 1 === index ? "end" : sliders[index + 1];
    pagetl.fromTo(netxslides, { y: "0%" }, { y: "50%" });
    pagetl.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0 });
    pagetl.fromTo(netxslides, { y: "50%" }, { y: "0%" },"-=0.5");

    pagescene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0,
    })

      .addIndicators({
        colorStart: "white",
        colorTrigger: "white",
        name: "page",
        indent: 200,
      })
      .setPin(slide, { pushFollowers: false })
      .setTween(pagetl)
      .addTo(controls);
  });
}
animation();
