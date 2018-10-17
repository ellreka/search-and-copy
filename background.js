chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "search_and_copy",
    title: "Search and Copy",
    contexts: ["selection"],
    type: "normal",
  });
})

chrome.contextMenus.onClicked.addListener(function(info,tab){
  var selectText = info.selectionText
  var searchLink = `https://www.google.co.jp/search?q=${selectText}`
  var textArea = document.createElement("textarea");
  textArea.style.cssText = "position:absolute;left:-100%";
  document.body.appendChild(textArea);
  textArea.value = selectText;
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  chrome.tabs.create({url: searchLink });
})