
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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Brigham City, Utah Temple",
        location: "Utah, United States",
        dedicated: "2012, September, 23",
        area: 36000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brigham-city-utah/400x250/brigham-city-temple-lds-1027480-wallpaper.jpg"
    },
    {
        templeName: "Albuquerque New Mexico Temple",
        location: "Mexico City, United States",
        dedicated: "2000, March, 5",
        area: 5729,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x250/albuquerque-temple-lds-137883-wallpaper.jpg"
    },
    {
        templeName: "Cardston Alberta Temple",
        location: "Alberta, Canada",
        dedicated: "1923, August, 29",
        area: 88562,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cardston-alberta/400x250/cardston-alberta-temple-exterior-1126230-wallpaper.jpg"
    }
];



const oldTemplesLink = document.querySelector("#oldTemples");
const newTemplesLink = document.querySelector("#newTemples");
const largeTemplesLink = document.querySelector("#largeTemples");
const smallTemplesLink = document.querySelector("#smallTemples");
const allTemplesLink = document.querySelector("#allTemples");

createTempleCard(temples);

oldTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => { 
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year < 1900;
    }));
});

newTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year > 2000;
    }));
});

largeTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000)
    );
});

smallTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000)
    );
});

allTemplesLink.addEventListener("click", () => {
    createTempleCard(temples);
});


function createTempleCard(filteredTemples) { 
    const templeCardsContainer = document.querySelector(".temple-cards-container");
    templeCardsContainer.innerHTML = "";

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        card.classList.add("temple-card");

        let contentDiv = document.createElement("div");
        contentDiv.classList.add("temple-cards-content");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">LOCATION:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">DEDICATED:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">SIZE:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");

        contentDiv.appendChild(name);
        contentDiv.appendChild(location);
        contentDiv.appendChild(dedication);
        contentDiv.appendChild(area);

        card.appendChild(contentDiv);
        card.appendChild(img);

        document.querySelector(".temple-cards-container").appendChild(card);
        
    });
}

// createTempleCard()