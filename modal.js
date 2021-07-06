document.addEventListener("DOMContentLoaded", (event) => {

	const modal = document.getElementsByClassName("modal")[0];
    const overlay = document.getElementsByClassName("overlay")[0];
	const closer = document.getElementsByClassName("close_modal")[0];
	// debugger

	closer.addEventListener("click", () => {
		modal.style.display = "none";
	});

	window.addEventListener("click", (event) => {
		if (event.target === overlay) {
			modal.style.display = "none";
		}
	});
})