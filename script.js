// This ensures the page starts at the top after a reload
window.onload = function() {
    window.scrollTo(0, 0);
};


//Lenis Scroll 
// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Listen for the 'scroll' event and log the event data to the console
lenis.on('scroll', (e) => {
  console.log(e);
});

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

//date and time

const datePage = document.querySelector('.date');
setInterval(() => {
  const currentDate = new Date;
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  datePage.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);
var video = document.querySelector('#myvid');
let confettiVid = document.querySelector('#confetti')
const orderButton = document.querySelector('.placebutton');
let toggleCount = 0;

orderButton.addEventListener('click', (e) => {
    if (toggleCount % 2 == 0) {
        video.style.opacity = 1;        
        toggleCount++;
    }
    else{
        video.style.opacity = 0;
        toggleCount++;
    }
});

const happyCounter = document.querySelector('.happycustomers')
// Retrieve the count from localStorage
let visitCount = localStorage.getItem('visitCount');

if (!visitCount) {
    visitCount = 0; // Initialize count if not set
}

// Increment and store the count
visitCount++;
localStorage.setItem('visitCount', visitCount);

// Display the count
happyCounter.innerHTML = `Happy Customers : ${visitCount*11 +2}`
//GSAP

let tl = gsap.timeline();
tl.to(".loader" , {
    top:"-100%",
    duration:.6,
    delay:4,
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
    delay:.5,
} , "a")

let tl2 = gsap.timeline();
tl2.from(".page2 .modes" , {
    scale:0,
    opacity:0,
    duration:1,
    scrollTrigger:{
        scroller:'body',
        trigger:'.page2',
        start:'top 50%',
        end: 'end 25%',
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
        end: 'end 25%',
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
        end: 'end 25%',
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
        end: 'end 25%',
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
        // markers:true,
    }
})
tl3.from(".r_txt" , {
    x:100,
    scale:0,
    duration:1,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        scrub:2,
        start:'top 60%',
        end: 'end 10%',
        scroller:"body",
        trigger:'.page3',
        // markers:true,
    }
})


