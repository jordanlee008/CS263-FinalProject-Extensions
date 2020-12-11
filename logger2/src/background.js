chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
      console.log("received " + request);
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://cs263.io/extension?message=" + request.message + "&timestamp=" + request.timestamp, true);
      xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
              sendResponse({ message: request.message });
          }
      }
      xhr.send();
  });
