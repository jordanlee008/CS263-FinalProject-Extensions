var receivingExtensionId = "cfmikhliigogmaebfaabdepmmggalhie";

document.addEventListener('keypress', function (e) {
    e = e || window.event;
    var charCode = typeof e.which == "number" ? e.which : e.keyCode;
    var d = new Date();
    if (charCode) {
        var payload = { message: String.fromCharCode(charCode), timestamp: d.getTime() };
        console.log(payload);
        chrome.runtime.sendMessage(receivingExtensionId,
            payload,
            function(res) {
                console.log("response " + res.message);
            });
    }
});
