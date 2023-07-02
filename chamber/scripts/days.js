const visit = document.getElementById("visit");

let lastVisit = window.localStorage.getItem("lastVisitTime");

if (lastVisit == null) {
    visit.textContent = "This is your first visit!";
} else {
    visit.textContent = `${Math.round((Date.now() - lastVisit) / 86400000)} days`;
}

let visitTime = Date.now();

localStorage.setItem("lastVisitTime", visitTime);
