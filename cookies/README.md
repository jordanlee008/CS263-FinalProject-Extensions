# Cookie Exfilitration with User Backdoor
## Authors
James Conant
Jeffrey Ding
Jordan Lee

## Overview
This Chrome Extension exfiltrates user cookies via the `chrome.cookies` API.
We create a user backdoor; if the wrong password is entered only the current webpage's cookies are printed.
If the right password is entered, all user cookies are printed.
