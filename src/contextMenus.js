
function OpenInSourcegraph({ linkUrl, selectionText, pageUrl }) {
    //TODO
}

chrome.contextMenus.create({
    id: 'open-sourcegraph',
    title: 'Open in Sourcegraph',
    contexts: ['link'],
    // onclick: OpenInSourcegraph,
});

chrome.contextMenus.onClicked.addListener(OpenInSourcegraph);