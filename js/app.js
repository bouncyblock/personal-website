function loadPage(page) {
    fetch('${page}.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        });
}

window.onload = () => loadPage('home')