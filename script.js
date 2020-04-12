// Variables.
let egg_count = 0;
let time_remaining = 300;
let timer = null;

// Selectors.
const counter_selector = document.querySelector("#counter span");
const timer_selector = document.querySelector("#timer span");
const result = document.querySelector("#result-msg");
const results_table = document.querySelector("#results")

const magikarp = document.querySelector("#magikarp");
const snorlax = document.querySelector("#snorlax");
const slowbro = document.querySelector("#slowbro");
const chansey = document.querySelector("#chansey");
const dragonite = document.querySelector("#dragonite");
const articuno = document.querySelector("#articuno");

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
        clearInterval(timer)
    }
}

function tick() {
    if (time_remaining > 0) {
        time_remaining -= 1;
        timer_selector.innerHTML = time_remaining;
    }

    if (time_remaining <= 30) {
        document.querySelector("#timer").classList.add("red");
    }

    if (time_remaining <= 0) { 
        results_table.classList.remove("display-none");
        if (egg_count <= 25) {
            magikarp.classList.add("highlight");
        } else if (egg_count <=50) {
            snorlax.classList.add("highlight");
        } else if (egg_count <=75) {
            slowbro.classList.add("highlight");
        } else if (egg_count <=100) {
            chansey.classList.add("highlight");
        } else if (egg_count <=131) {
            dragonite.classList.add("highlight");
        } else {
            articuno.classList.add("highlight");
        }
    }
}

function main() {
    const container = document.querySelector(".container");
    container.addEventListener("mousedown", function() { this.classList.add("shovel-up"); });
    container.addEventListener("mouseup", function() { this.classList.remove("shovel-up"); });

    const eggs = document.querySelectorAll(".egg");
    eggs.forEach(egg => egg.addEventListener("click", revealEgg));

    timer_selector.innerHTML = time_remaining;
    timer = setInterval(tick, 1000);
}

main();
