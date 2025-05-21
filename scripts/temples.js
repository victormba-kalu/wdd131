const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("currentyear");
yearElement.textContent = currentYear;

const lastModifiedDate = document.lastModified;
const lastModifiedElement = document.getElementById("lastmodified");
lastModifiedElement.textContent = lastModifiedDate;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

