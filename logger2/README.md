# Keylogging via Multiple Innocuous Looking Extensions - 2
## Authors
James Conant
Jeffrey Ding
Jordan Lee

## Overview
This Chrome Extension sends receives keyboard input from the extension contained in `logger1` via the `chrome.extension` API.
It then forwards this keyboard input to our attacker-controlled server at `https://cs263.io/extension` via an HTTP request.

