let tl = gsap.timeline({
    defaults:{
    ease: "none",
    duration: 1
    },
    scrollTrigger:{
        trigger: ".demowrapper",
        markers: true,
        start: "top top",
        end: "bottom 60%",
        toggleActions: "restart none none reverse",
        pin: true,
        scrub: 1
    }
})

tl.from("#planet4", {y:50})
    .from("#planet3", {y:100}, "<")
    .from("#planet2", {y:200}, "<")
    .from("#planet1", {y:300}, "<")
    .from("#mountains", {y:400}, "<")
    .from("#fg", {y:600}, "<")
    .from("#text", {y:1500}, "<")



const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)