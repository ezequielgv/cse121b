/* W05: Programming Tasks */

/* Declare and initialize global variables */
const  templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {

    temples.forEach(temple => {
        let templeArticle = document.createElement('article');

        const templeTitle = document.createElement('h3');
        const titleText = document.createTextNode(temple.templeName);
        templeTitle.appendChild(titleText);

        let templePhoto = document.createElement('img');
        templePhoto.setAttribute('src', temple.imageUrl);
        templePhoto.setAttribute('alt', temple.location);

        templeArticle.appendChild(templeTitle);
        templeArticle.appendChild(templePhoto);

        templesElement.appendChild(templeArticle);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        const data = await response.json();
        templeList = data;
        displayTemples(templeList);
    } catch (error) { console.error("Error al obtener los datos de la API:", error); }
}

/* reset Function */
const reset = () => { templesElement.innerHTML = ''; };

/* filterTemples Function */
function filterTemples (temples) {
    reset();
    const filter = document.getElementById('filtered').value;

    switch (filter) {
        case 'utah':
            temples = templeList.filter(temple => temple.location.toLowerCase().includes('utah'));
            displayTemples(temples);
            break;
        case 'notutah':
            temples = templeList.filter(temple => !temple.location.toLowerCase().includes('utah'));
            displayTemples(temples);
            break;
        case 'older':
            temples = templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(temples);
            break;
        default:
            displayTemples(temples);
            break;
    }
}

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

getTemples();
