// Variables.
let egg_count = 0;
let time_remaining = 300;
let timer = null;

// Selectors.
const counter_selector = document.querySelector(".counter");
const timer_selector = document.querySelector(".timer");

function revealEgg() {
    if (time_remaining <= 0) {
        return;
    }
    if (this.classList.contains("hidden")) {
        this.classList.remove("hidden");
        egg_count += 1;
        counter_selector.innerHTML = egg_count;
    }
    if (egg_count == 132) {
        let victory = document.querySelector(".victory");
        victory.innerHTML = "Congrats! You've found all the eggs!";
        clearInterval(timer)
    }
}

function tick() {
    if (time_remaining > 0) {
        time_remaining -= 1;
        timer_selector.innerHTML = time_remaining;
    }
}

function main() {
    const eggs = document.querySelectorAll(".egg")
    eggs.forEach(egg => egg.addEventListener("click", revealEgg));

    timer_selector.innerHTML = time_remaining;
    timer = setInterval(tick, 1000);
}

main()
