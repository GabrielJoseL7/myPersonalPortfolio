gsap.from(".nav",{
    color: "white", 
    y: -200,
    ease: "back.out",
    scale: 0.5,
    duration: 5, 
    stagger: 0.5,
}); 

gsap.from(".profession",{ 
    duration: 5,
    delay: 0.25, 
  scrambleText: {
    chars: "upperCase", 
    revealDelay: 0.1, 
    speed: 0.5, 
    newClass: "myClass"
  }
});

const text = new SplitType('.myName', { types: 'words, chars' })

text.chars.forEach(char => {
    gsap.from(char, {
        y: gsap.utils.random(-1000,1000),
        x: gsap.utils.random(-1000,1000),
        rotate: gsap.utils.random(5,270),
        duration:5,
        speed: 5,
        color: "rgb(${gsap.utils.random(0,255), ${gsap.utils.random(0,255), ${gsap.utils.random(0,255)"
    })
})

gsap.from(".im",{
    scale: 0,
    delay: 1.25,
    duration: 5, 
    opacity: 0, 
})

gsap.from(".socialNetwork",{
    color: "white", 
    x: 400,
    ease: "back.out",
    scale: 0.5,
    duration: 5, 
    stagger: 0.5,
}); 

gsap.from(".arrow",{
    color: "white", 
    y: 400,
    ease: "back.out",
    scale: 0.5,
    duration: 5, 
    stagger: 0.5,
}); 

gsap.registerPlugin(ScrollTrigger);

gsap.from(".imgContainer",{
    scrollTrigger: {
        trigger: ".AboutMeSection",
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play reverse reverse play",
    },
    x: -1000,
    duration: 4, 
    ease: "back.out",
})

gsap.from(".SkillsMainContainer",{
    scrollTrigger: {
        trigger: ".AboutMeSection",
        start: "top 89%",
        end: "bottom 10%",
        toggleActions: "play reverse reverse play",
    },
    x: 1000,
    duration: 4, 
    ease: "back.out",
})

gsap.from(".SkillTitleContainer2",{
    scrollTrigger: {
        trigger: ".ProjectsSection",
        start: "top 89%",
        end: "bottom 10%",
        toggleActions: "play reverse reverse play",
    },
    y: 1000,
    x:-2500,
    rotate: 360,
    duration: 4, 
    ease: "power1.out",
    stagger: 0.5,
})

gsap.from(".ContactContainer",{
    scrollTrigger: {
        trigger: ".ContactSection",
        start: "top 89%",
        end: "bottom 10%",
        toggleActions: "play reverse reverse play",
    },
    y: -1000,
    duration: 5, 
    ease: "bounce.out",
    stagger: 0.5,
    opacity: 0
})

const animatedBoxes = document.querySelectorAll('.skill');

        animatedBoxes.forEach(box => {
            const hoverTimeline = gsap.timeline({ paused: true });

            hoverTimeline
                .to(box, {
                    scale: 1.1,
                    backgroundColor: "#fca311",
                    duration: 0.3,
                    ease: "power2.out"
                }, 0) 
                .to(box, {
                    y: -10, 
                    duration: 0.2,
                    ease: "power2.out"
                }, 0); 


            box.addEventListener('mouseenter', () => {
                hoverTimeline.play(); // 
            });

            box.addEventListener('mouseleave', () => {
                hoverTimeline.reverse(); // 
            });
        });