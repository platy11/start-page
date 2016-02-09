/* globals moment */

setInterval(function() {
	window.now = new Date();
	document.querySelector('.time').innerText = moment().format('h:mm a,  Do MMMM YYYY');
}, 1500);