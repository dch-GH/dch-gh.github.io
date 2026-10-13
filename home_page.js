// This script is loaded only on the home page, not for each blog page.

if (document.readyState !== "loading") {
	init();
} else {
	document.addEventListener("DOMContentLoaded", init);
}

function init() {
	let blogList = document.getElementById("bloglist");
	let now = Date.now();

	for (var li of blogList.children) {
		let date = li.getAttribute("pubDate");
		let d = Date.parse(date);

		var diff = dateDifferenceInDays(d, now);
		if (diff <= 30) {
			li.classList.add("new");
		}
	}
}

const dateDifferenceInDays = (dateInitial, dateFinal) =>
	(dateFinal - dateInitial) / 86_400_000;
