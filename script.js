let h1 = document.querySelector("h1");
let h1Text = h1.textContent;
let splitted = h1Text.split("");

let clutter = "";
let half = splitted.length/2
splitted.forEach((e, i)=>{
    if(i<half){
        clutter += `<span class="x">${e}</span>`;
    }else{
        clutter += `<span class="y">${e}</span>`;
    }
})

h1.innerHTML = clutter;

gsap.from("h1 .x", {
    y: 100,
    duration: 1.3,
    delay: 1,
    opacity: 0,
    stagger: .3,
    ease: "back.out"
})
gsap.from("h1 .y", {
    y: 100,
    duration: 1.3,
    delay: 1,
    opacity: 0,
    stagger: -.3,
    ease: "back.out"
})

