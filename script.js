// Variables.
let egg_count = 0;
let time_remaining = 300;
let timer = null;

// Selectors.
const counter_selector = document.querySelector("#counter span");
const timer_selector = document.querySelector("#timer span");
const h2_selector = document.querySelectorAll("h2");
const hint_selector = document.querySelector("#hint");

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
        displayResults();
    }
}

function tick() {
    if (time_remaining > 0) {
        time_remaining -= 1;
        timer_selector.innerHTML = time_remaining;
    }
    if (time_remaining == 30) {
        document.querySelector("#timer").classList.add("red");
    }
    if (time_remaining <= 0) { 
        displayResults();
    }
}

function displayResults() {
    clearInterval(timer);
    const results_table = document.querySelector("#results");
    results_table.classList.remove("display-none");
    if (egg_count <= 25) {
        document.querySelector("#magikarp").classList.add("highlight");
    } else if (egg_count <= 50) {
        document.querySelector("#snorlax").classList.add("highlight");
    } else if (egg_count <= 75) {
        document.querySelector("#slowbro").classList.add("highlight");
    } else if (egg_count <= 100) {
        document.querySelector("#chansey").classList.add("highlight");
    } else if (egg_count <= 131) {
        document.querySelector("#dragonite").classList.add("highlight");
    } else {
        document.querySelector("#articuno").classList.add("highlight");
    }
}

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    h2_selector.forEach(h => h.classList.add("smaller-font"));
    hint_selector.classList.add("display-none");
  } else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
    h2_selector.forEach(h => h.classList.remove("smaller-font"));
    hint_selector.classList.remove("display-none");
  }
}

const debounce = (callback, delay = 100) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      timeoutId = null
      callback(...args)
    }, delay)
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

    window.onscroll = debounce(scrollFunction);
}

main();
