// This script file is loaded for every actual blog page when we navigate to one.

if (document.readyState !== "loading") {
	blogInit();
} else {
	document.addEventListener("DOMContentLoaded", blogInit);
}

function blogInit() {
	hljs.highlightAll();

	for (var link of document.getElementsByTagName("a")) {
		// If it has no id, we assume it's a Markdown [Link](like-this.com)
		// and we want to set it's target to _blank so it
		// opens in a new tab.
		if (!link.id && link.target != "_blank" && !link.className) {
			link.target = "_blank";
		}
	}
}
