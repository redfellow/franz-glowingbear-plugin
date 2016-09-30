Notification.requestPermission = function() {
	console.warn("Notification.requestPermission is not a function when running GB in Franz, so I added one that always returns true.")
	return true;
}
