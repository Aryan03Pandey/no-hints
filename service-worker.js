chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "ON",
    });
  });

chrome.action.onClicked.addListener(async (tab) => {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    await chrome.action.setBadgeText({
    tabId: tab.id,
    text: nextState,
    });

    if (nextState === "ON") {
        await chrome.scripting.executeScript({
            files: ["hideHints.js"],
            target: { tabId: tab.id },
        });
    } else if (nextState === "OFF") {
        await chrome.scripting.executeScript({
            files: ["showHints.js"],
            target: { tabId: tab.id },
        });
    }
});

