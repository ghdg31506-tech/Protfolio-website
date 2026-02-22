const moteEl = document.querySelector(".mote");
const thirdContainerEl = document.querySelectorAll(".thirdChild");

const sixContainerEl = document.querySelectorAll(".sixContainer");

const firstcontainerEl = document.querySelectorAll(".firstcontainer");

function animate() {
    if (moteEl.classList.contains("motion")) {
        moteEl.classList.remove("motion")
    } else {
        moteEl.classList.add("motion");
    }
}

setInterval(3000, animate())


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




