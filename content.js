const html = document.documentElement.outerHTML;
chrome.storage.local.set({ snapshot: html }, () => {
  alert("Snapshot saved!");
});
