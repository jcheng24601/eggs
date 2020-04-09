const eggs = document.querySelectorAll(".egg");
var victory = document.querySelector(".victory");
var counter = document.querySelector(".counter");
var count = 0;
function revealEgg() {
	if (this.classList.contains("hidden")) {
		this.classList.remove("hidden");
		count += 1;
		counter.innerHTML = count;
	}
	if (count == 132) {
		victory.innerHTML = "Congrats! You've found all the eggs!";
	}
}
function listenEgg(thing) {
	thing.addEventListener("click", revealEgg);
}
eggs.forEach(listenEgg);