function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

init();

var crsr = document.querySelector(".cursor")
document.querySelector(".main").addEventListener("mousemove",function(dets){
       crsr.style.left = dets.x + 20 + "px";
       crsr.style.top = dets.y + 20 + "px";
})

 var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller:  ".main",
        start: "top 30%",
        end:"top 0",
        scrub: 2
    }
})

tl.to(".page1 h1",{
    x: -100
},"anim")
tl.to(".page1 h2",{
    x: 100
},"anim")
tl.to(".page1 video",{
     width:"90%"
},"anim")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller:  ".main",
        start: "top -115%",
        end:"top -120%",
        markers:true,
        scrub: 2
    }
}) 

tl2.to(".main",{
    backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller:  ".main",
        start: "top -280%",
        end:"top -300%",
        markers:true,
        scrub: 2
    }
}) 

tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})


document.querySelectorAll(".box").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image");
        crsr.style.width = "470px"
        crsr.style.height = "350px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
        
    })
    elem.addEventListener("mouseleave",function(){
        
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
        
    })
})