/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Ezequiel Videla",
    photo: "images/my_photo.jpeg",
    favoriteFoods: ['Mate', ' Lemon Pie', ' Pizza', ' Strawberry Pie', ' Asado'],
    hobbies: ['Read fantastic books', 'Listen music', 'Meeting with my friends'],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: 'Cordoba, Argentina',
    length: '1 year'
});
myProfile.placesLived.push({
    place: 'Joao Pessoa, Brazil',
    length: '1 year'
});
myProfile.placesLived.push({
    place: 'Buenos Aires, Argentina',
    length: '21 year'
});

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').innerHTML = myProfile.name;

/* Photo with attributes */
const photo = document.querySelector('img');
const adressPhoto = myProfile.photo;
photo.setAttribute('src', adressPhoto);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let liElement = document.createElement('li');
    liElement.textContent = food;
    document.getElementById('favorite-foods').appendChild(liElement);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let liElement = document.createElement('li');
    liElement.textContent = hobby;
    document.getElementById('hobbies').appendChild(liElement);
});

/* Places Lived DataList */
const dlElement = document.getElementById('places-lived');

myProfile.placesLived.forEach(place => {
    const dtElement = document.createElement('dt');
    dtElement.textContent = place.place;

    const ddElement = document.createElement('dd');
    ddElement.textContent = place.length;

    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
});

