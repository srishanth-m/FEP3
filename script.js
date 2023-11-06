const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink" , {
    stagger : .2,
    y : 20,
    duration : 2,
    ease : Power1,
    opacity : 0,
})

Shery.textAnimate("#headings h1", {
    style: 1,
    y: 10,
    delay: 0.2,
    duration: .7,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

gsap.from(".anim2" , {
    y : 50,
    stagger : .3,
    ease : Expo,
    duration : 1,
    opacity : 0,
})

Shery.imageEffect(".img" , {
    style : 3,
})

document.querySelector("#ftext button").addEventListener("mouseover" , function(){
    gsap.to("#future video" , {
        opacity : 1,
        duration : 1,
        ease : Power4,
    })
})

document.querySelector("#ftext button").addEventListener("mouseleave" , function(){
    gsap.to("#future video" , {
        opacity : 0,
        duration : .75,
        ease : Power4,
    })
})