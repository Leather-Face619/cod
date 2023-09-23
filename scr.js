var cur=document.querySelector("#cur")
var curb=document.querySelector("#cur-blur")

document.addEventListener("mousemove",function (params) {
   
   
   cur.style.left=params.x+20+"px"
   cur.style.top=params.y+"px"
   curb.style.left=params.x-150+"px"
   curb.style.top=params.y-150+"px"
})



gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function (det) {
  det.addEventListener("mouseenter", function () {
  cur.style.scale=3
  cur.style.border = "1px solid red"
  cur.style.backgroundColor="transparent"
})
  det.addEventListener("mouseleave", function () {
  cur.style.scale=1
  cur.style.border = "0px solid red"
  cur.style.backgroundColor="red"
})
})
gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 35%",
    scrub: 2,
  },
});
gsap.from("#cards-container", {
  scale:0.2,
  opacity: 0,
  duration: 0.2,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:true,
    start: "top 85%",
    end: "top 50%",
    scrub: 0,
  }
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});