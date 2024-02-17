function createElement(data) {
    let newP = document.createElement('p');
    newP.textContent = (data);
    document.body.appendChild(newP);
}

function queryWikipedia(callback) {
    let xhr = new XMLHttpRequest();
    let url = new URL ('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*')
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var page = response.query.pages;
            var pageId = Object.keys(page)[0];
            callback(page[pageId].extract);
        }
    };
    xhr.send();
}

queryWikipedia(createElement);