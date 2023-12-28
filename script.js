const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var t1 = gsap.timeline();

  t1.from("#nav", {
    y: "-10",
    duration: 2,
    opacity: 0,
    ease: Expo.easeInOut,
  })

    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })

    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
};

function circleMouseFollower(xscale,yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate( ${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
  });
}

//jab mouse move ho to ham log skew kar paaye aur maximum and minimum skey define /set kr paaye
//jab mouse move ho to thinning value increase ho


var timeout;
function circlethinner() {
  //define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);
    var xdiff = dets.clientX - xprev;
    var ydiff = dets.clientY - yprev;

    xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(0.8, 1.2, ydiff);
    xprev = dets.clientX;

    yprev = dets.clientY;
    // console.log(xdiff, ydiff);

    circleMouseFollower(xscale,yscale);

    timeout = setTimeout(function(){ 
        document.querySelector("#minicircle").style.transform = `translate( ${dets.clientX}px,${dets.clientY}px) scale(1,1)`;

    },100);
  });
};

circlethinner();
circleMouseFollower();
firstPageAnim();



//select 3 elem, and apply a mousemove on them and then find the range of mouse cursor 
//i.e x and y position  of mouse 
//and show the required image in that range and rotate the image while moving the image and while speeding up the mouse movement so the rotation movement


document.querySelectorAll(".elem").forEach(function (elem) {

    var rotate=0;
    var diffrot=0;
    elem.addEventListener("mouseleave",function(dets){


   
        gsap.to(elem.querySelector("img"),{
        opacity:0,
        ease:Power3,
        
        left:dets.clientX,
        rotate:gsap.utils.clamp(-20,20,diffrot),
        
        
        
        }) ;
        });
    elem.addEventListener("mousemove",function(dets){


        var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot=dets.clientX - rotate;
      rotate=dets.clientX;
    //   gsap.utils.clamp(-20,20,)
       gsap.to(elem.querySelector("img"),{
    opacity:1,
ease:Power3,
top:diff,
left:dets.clientX,
rotate:gsap.utils.clamp(-20,20,diffrot)



}) ;
    });
});

// document.querySelectorAll(".elem").forEach(function (elem) {
//     elem.addEventListener("mousemove", function (event) {
//         const mouseX = event.clientX - elem.getBoundingClientRect().left;
//         const mouseY = event.clientY - elem.getBoundingClientRect().top;

//         gsap.to(elem.querySelector("img"), {
//             x: mouseX,
//             y: mouseY,
//             rotation: mouseX,
//             opacity: 1,
//             ease: "power1"
//         });
//     });
// });
// document.querySelectorAll(".elem").forEach(function (elem) {
//     const img = elem.querySelector("img");
//     elem.addEventListener("mousemove", function (event) {
//         const mouseX = event.clientX - elem.getBoundingClientRect().left;
//         const mouseY = event.clientY - elem.getBoundingClientRect().top;

//         gsap.to(img, {
//             x: mouseX,
//             y: mouseY,
//             rotation: mouseX,
//             opacity: 1,
//             ease: "power1"
//         });
//     });
// });
// document.querySelectorAll(".elem").forEach(function (elem) {
//     const img = elem.querySelector("img");

//     elem.addEventListener("mousemove", function (event) {
//         const mouseX = event.clientX - elem.getBoundingClientRect().left;
//         const mouseY = event.clientY - elem.getBoundingClientRect().top;

//         gsap.to(img, {
//             x: mouseX,
//             y: mouseY,
//             rotation: mouseX * 0.5, // Adjust rotation speed
//             ease: "power1.inOut"
//         });
//     });

//     elem.addEventListener("mouseleave", function () {
//         gsap.to(img, { opacity: 0, ease: "power1.inOut" });
//     });

//     elem.addEventListener("mouseenter", function () {
//         gsap.to(img, { opacity: 1, ease: "power1.inOut" });
//     });
// });
// document.querySelectorAll(".elem").forEach(function (elem) {
//     const img = elem.querySelector("img");

//     elem.addEventListener("mousemove", function (event) {
//         const mouseX = event.clientX - elem.getBoundingClientRect().left;
//         const mouseY = event.clientY - elem.getBoundingClientRect().top;

//         gsap.to(img, {
//             x: mouseX,
//             y: mouseY,
//             rotation: mouseX * 0.5,
//             ease: "power1.inOut"
//         });
//     });
// });
// document.querySelectorAll(".elem").forEach(function (elem) {
//     const img = elem.querySelector("img");

//     gsap.set(img, { opacity: 0 }); // Set initial opacity to 0

//     elem.addEventListener("mousemove", function (event) {
//         const mouseX = event.clientX - elem.getBoundingClientRect().left;
//         const mouseY = event.clientY - elem.getBoundingClientRect().top;

//         gsap.to(img, {
//             x: mouseX,
//             y: mouseY,
//             rotation: mouseX * 0.5,
//             ease: "power1.inOut"
//         });
//     });

//     elem.addEventListener("mouseleave", function () {
//         gsap.to(img, { opacity: 0, ease: "power1.inOut" });
//     });

//     elem.addEventListener("mouseenter", function () {
//         gsap.to(img, { opacity: 1, ease: "power1.inOut" });
//     });
// });

