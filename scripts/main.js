/* globals moment */

window.onload = function(){
	setInterval(function() {
		window.now = moment();
		document.querySelector(".time").textContent = moment().format("h:mm a,  Do MMMM YYYY");
	}, 1500);
};
