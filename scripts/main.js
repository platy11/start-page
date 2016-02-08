/* globals moment */

setInterval(function() {
	window.now = new Date();
	document.querySelector('.time').innerText = moment().format('MMMM Do YYYY, h:mm a');
}, 1500);