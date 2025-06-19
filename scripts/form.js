const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("currentyear");
yearElement.textContent = currentYear;

const lastModifiedDate = document.lastModified;
const lastModifiedElement = document.getElementById("lastmodified");
lastModifiedElement.textContent = lastModifiedDate;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function populateProductDropdown() {
    const productSelect = document.getElementById('product');

    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }
}

function setCurrentYear() {
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}

function setLastModified() {
    const lastModifiedSpan = document.getElementById('lastmodified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    populateProductDropdown();
    setCurrentYear();
    setLastModified();
});

