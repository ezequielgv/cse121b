/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Ezequiel Videla";
const currentYear = 2024;
let profilePicture = "images/my_photo.jpeg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.getElementById('year');
const foodElement = document.getElementById('food');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', fullName);

/* Step 5 - Array */
let newFood = ' Pastel de papa';
let favoriteFoods = ['Mate', ' Lemon Pie', ' Pizza', ' Strawberry Pie', ' Asado']
foodElement.textContent = `${favoriteFoods}`;

// Add a new element to the array
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Delete the first element of array
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Delete the last element of array
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;