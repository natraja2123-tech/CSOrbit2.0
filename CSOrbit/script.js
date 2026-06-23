gsap.registerPlugin(ScrollTrigger);

gsap.from(".card",{
opacity:0,
y:100,
duration:1,
stagger:0.2,
scrollTrigger:{
trigger:".modules",
start:"top 80%"
}
});