chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "compare") {
    chrome.storage.local.get("snapshot", (data) => {
      const oldHTML = data.snapshot || "";
      const newHTML = message.html;

      if (oldHTML === newHTML) {
        chrome.scripting.executeScript({
          target: { tabId: sender.tab.id },
          func: () => alert("✅ No differences found!")
        });
      } else {
        chrome.scripting.executeScript({
          target: { tabId: sender.tab.id },
          func: () => alert("❌ Changes detected!")
        });
      }
    });
  }
});
