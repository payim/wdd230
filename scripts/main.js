const themeToggle = document.querySelector("#theme-toggle");
const mobileToggle = document.querySelector("#mobile-toggle");
const visitsCounter = document.querySelector("#visit_counter");

themeToggle.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("t-dark");
    themeToggle.querySelectorAll(".icon").forEach((icon) => {
        icon.classList.toggle("active");
    });
});

mobileToggle.addEventListener("click", () => {
    mobileToggle.querySelectorAll(".icon").forEach((icon) => {
        icon.classList.toggle("active");
    });
    mobileToggle.parentElement.querySelector(".contents").classList.toggle("open");
});

let totalVisits = Number(window.localStorage.getItem("totalVisits")) || 0;

if (totalVisits !== 0) {
    visitsCounter.textContent = totalVisits;
} else {
    visitsCounter.textContent = `Hey guess what?! 🥳 you are the first to be here!`;
}

totalVisits++;

localStorage.setItem("totalVisits", totalVisits);