// Variables.
let egg_count = 0;
let time_remaining = 300;

// Selectors.
const counter = document.querySelector(".counter");
const timer = document.querySelector(".timer");

function revealEgg() {
    if (time_remaining <= 0) {
        return;
    }
    if (this.classList.contains("hidden")) {
        this.classList.remove("hidden");
        egg_count += 1;
        counter.innerHTML = egg_count;
    }
    if (egg_count == 132) {
        let victory = document.querySelector(".victory");
        victory.innerHTML = "Congrats! You've found all the eggs!";
    }
}

function tick() {
    if (time_remaining > 0) {
        time_remaining -= 1;
        timer.innerHTML = time_remaining;
    }
}

function main() {
    const eggs = document.querySelectorAll(".egg")
    eggs.forEach(egg => egg.addEventListener("click", revealEgg));

    timer.innerHTML = time_remaining;
    setInterval(tick, 1000);
}

main()
