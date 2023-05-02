const lozadImageObserver = lozad();
lozadImageObserver.observe();

gsap.registerPlugin( ScrollTrigger );

const headerSlideUp = gsap.fromTo(
  "section.landing-section .wrapper .page-title .line .text",
  {
    y: 100,
  },
  {
    y: 0,
    stagger: 0.1,
    duration: 0.75,
  }
)

let imageShadowSelector = `section.info-section .wrapper .row
.visual-column .info-visual-01 .image-container-01 .image-shadow`
const infoImageParallax = gsap.fromTo(
  imageShadowSelector,
  {
    y: -25
  },
  {
    y: 35
  }
)

ScrollTrigger.create({
  animation: infoImageParallax,
  trigger: "#info-section",
  scrub: true,

  start: "top 10%",
  end: "bottom center"
})