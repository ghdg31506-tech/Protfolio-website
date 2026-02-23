const moteEl = document.querySelector(".mote");
const thirdContainerEl = document.querySelectorAll(".thirdChild");

const sixContainerEl = document.querySelectorAll(".sixContainer");

const firstcontainerEl = document.querySelectorAll(".firstcontainer");

const fourhtChildEl = document.querySelectorAll(".fourhtChild");

const fiveChildEl = document.querySelectorAll(".fiveChild");

const sidebarEl = document.querySelectorAll(".sidebar");

const secondContainerEl = document.querySelectorAll(".secondContainer");



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("opacity");
        }else {
            entry.target.classList.remove("opacity")
        }
    });
});


thirdContainerEl.forEach((el) => observer.observe(el));

firstcontainerEl.forEach((el) => observer.observe(el));

fourhtChildEl.forEach((el) => observer.observe(el));

fiveChildEl.forEach((el) => observer.observe(el));

sixContainerEl.forEach((el) => observer.observe(el));

sidebarEl.forEach((el) => observer.observe(el));

secondContainerEl.forEach((el) => observer.observe(el));
