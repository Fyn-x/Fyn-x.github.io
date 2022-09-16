// AOS Skill Section
const aosImageSkill = document.querySelectorAll("#skill-logo-container img");
aosImageSkill.forEach((img, i) => {
  img.dataset.aos = "flip-left";
  img.dataset.aosDuration = 2000;
  img.dataset.aosDelay = i * 250;
  img.dataset.aosOffset = 50;
});

const aosImageCertif = document.querySelectorAll("#sertif img");
aosImageCertif.forEach((img, i) => {
  img.dataset.aos = "flip-left";
  img.dataset.aosDuration = 2000;
  img.dataset.aosDelay = i * 250;
  img.dataset.aosOffset = 50;
});

const navbar = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    navbar.classList.add("bg-dark", "shadow");
  } else {
    navbar.classList.remove("bg-dark", "shadow");
  }
});


// GASP
gsap.registerPlugin(TextPlugin);

gsap.from(".btn-warning", {
  delay: 10.7,
  duration: 3.5,
  opacity: 0,
  x: 0,
});
gsap.from("#hero img", {
  duration: 2,
  delay: 0.5,
  x: 0,
  opacity: 0,
  scale: 0.5,
});
gsap.from("#hero h1 span", {
  duration: 2.5,
  delay: 4,
  text: "",
  opacity: 0,
});
gsap.from("#hero h1", {
  duration: 2.5,
  delay: 2,
  x: -100,
  opacity: 0,
});
gsap.from("#hero h2", {
  duration: 2.5,
  delay: 1.1,
  x: -100,
  opacity: 0,
});
gsap.from("#hero p", {
  duration: 5,
  delay: 6,
  text: "",
  opacity: 0,
});
gsap.from(".about-detail", {
  duration: 30,
  delay:1.6,
  text: "",
});

