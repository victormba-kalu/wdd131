const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("currentyear");
yearElement.textContent = currentYear;

const lastModifiedDate = document.lastModified;
const lastModifiedElement = document.getElementById("lastmodified");
lastModifiedElement.textContent = lastModifiedDate;