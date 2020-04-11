// Variables.
let egg_count = 0;

// Selectors.
const counter = document.querySelector(".counter");

function revealEgg() {
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

function main() {
    const eggs = document.querySelectorAll(".egg")
    eggs.forEach(egg => egg.addEventListener("click", revealEgg));
}

main()
