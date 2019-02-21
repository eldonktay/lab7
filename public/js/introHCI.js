'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(.'likeBtn').click(likeFunction);
}

function likeFunction(e) {
	e.preventDefault();
	gtag("create", "UA-134934560-1", "auto");
	gtag('event', 'click', {
		'event-category': 'like'
	});
}