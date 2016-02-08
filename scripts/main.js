setInterval(function() {
	window.now = new Date();
	document.querySelector('.time').innerText = Date.now()
}, 1500);