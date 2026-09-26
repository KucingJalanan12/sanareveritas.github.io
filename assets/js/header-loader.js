function loadHeader() {
    const path = window.location.pathname;
    const isID = path.includes('/id/');
    const headerFile = isID ? 'header-id.html' : 'header-en.html';

    fetch(`../assets/includes/${headerFile}`)
        .then(response => response.text())
        .then(data => {
            const placeholder = document.getElementById('header-placeholder');
            placeholder.innerHTML = data;
        })
        .catch(err => console.error("Error loading header: ", err));
}

loadHeader();