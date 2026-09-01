const cards = document.querySelectorAll(".card, .card-large");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

cards.forEach((card) => {
    observer.observe(card);
});

function loadHeader() {
    const path = window.location.pathname;
    const isID = path.includes('/id/');
    const headerFile = isID ? 'header-id.html' : 'header-en.html';

    fetch('../assets/includes/${headerFile}')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
}

document.addEventListener('DOMContentLoaded', loadHeader);
