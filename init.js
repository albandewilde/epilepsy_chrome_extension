document.addEventListener("DOMContentLoaded", function() {
    chrome.tabs.executeScript(null, {file: "epilepsy.js"})
    window.close()
})
