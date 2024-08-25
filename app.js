function homePageAnimation(){
    gsap.set(".slidesm",{
        scale:5,})
    var tl =gsap.timeline ({
        scrollTrigger:{
            trigger:".home",
            start:"top top",
            end:"bottom bottom",
            scrub: 2,
        }
    
    })   
    
    tl.to(".vdodiv",{
        '--clip': "0%",
        ease:Power2,
    },'a')
    tl.to(".slidesm",{
       scale:1,
       ease: Power2
    },'a')
    tl.to(".slidesm",{
        scale:1,
     },'a')
     tl.to(".lft",{
        xPercent:-10,
        stagger:.03,
        ease:Power2,
     },'b')
     tl.to(".rgt",{
        xPercent:10,
        stagger:.03,
        ease:Power2,
     },'b')
}
function realAnime(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
            scrub:2
        },
        xPercent:-200,
        ease: Power4
    })
}
function mouseF(){
    document.querySelectorAll(".listelem")
.forEach(function(el){
    el.addEventListener("mousemove",function(dets){
       this.querySelector(".picture")
    })
    el.addEventListener("mouseleave",function(dets){})
})

}
homePageAnimation();
realAnime();