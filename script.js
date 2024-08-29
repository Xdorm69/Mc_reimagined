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

let tl2 = gsap.timeline();
tl2.from(".page2 .modes" , {
    scale:0,
    opacity:0,
    duration:1,
    scrollTrigger:{
        scroller:'body',
        trigger:'.page2',
        start:'top 50%',
        end: 'end 10%',
        // markers:true,
        scrub:2,
    
    }
})
tl2.from(".page2 .m" , {
    scale:0,
    opacity:0,
    duration:.5,
    stagger:.5,
    delay:5,
    scrollTrigger:{
        scroller:'body',
        trigger:'.page2',
        start:'top 50%',
        end: 'end 10%',
        // markers:true,
        scrub:2,
    
    }
})

tl2.from(".page2 .m img" , {
    scale:0,
    opacity:0,
    duration:.2,
    stagger:.5,
    scrollTrigger:{
        scroller:'body',
        trigger:'.page2',
        start:'top 50%',
        end: 'end 10%',
        // markers:true,
        scrub:2,
    
    }
})

tl2.from(".page2 .m .txt_btm" , {
    scale:0,
    y:200,
    stagger:.5,
    opacity:0,
    duration:.5,
    delay:5,
    scrollTrigger:{
        scroller:'body',
        trigger:'.page2',
        start:'top 50%',
        end: 'end 10%',
        // markers:true,
        scrub:2,
    
    }
})

let tl3 = gsap.timeline();

tl3.from(".r" , {
    x:100,
    scale:0.5,
    duration:1,
    opacity:0,
    stagger:.6,
    scrollTrigger:{
        scrub:2,
        start:'top 60%',
        end: 'end 10%',
        scroller:"body",
        trigger:'.page3',
        markers:true,
    }
})
tl3.from(".r_txt" , {
    x:100,
    scale:0,
    duration:1,
    opacity:0,
    stagger:.6,
    scrollTrigger:{
        scrub:2,
        start:'top 60%',
        end: 'end 10%',
        scroller:"body",
        trigger:'.page3',
        markers:true,
    }
})