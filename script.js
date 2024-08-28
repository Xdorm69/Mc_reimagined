//GSAP

let tl = gsap.timeline();
tl.to(".loader" , {
    top:"-100%",
    duration:.6,
    delay:3,
})
tl.from(".n_right li" , {
    y:100,
    opacity:0,
    stagger:.2,
    duration:.7,
} , "a")

tl.from(".p_img img" , {
    x:-500,
    duration:1,
    opacity:0,
} , "a")

tl.from(".p_text h1" , {
    y:400,
    opacity:0,
    duration:.5,
} , "a")

tl.from(".p_text p" , {
    y:200,
    opacity:0,
    duration:.5,
})