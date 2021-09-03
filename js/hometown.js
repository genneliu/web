const foodArray = [
  "Rosa's Cantina",
  "Cattleman's SteakHouse",
  "Mariscos Los Mariachis",
  "L & J Cafe",
  "The Hoppy Monk",
  "Crave Kitchen and Bar",
  "Delicias",
  "Carlos and Mickey's",
  "Stateline Texas BBQ",
];

function generateFood(event) {
  const restaurant = Math.floor(Math.random() * foodArray.length);
  console.log(restaurant, foodArray[restaurant]);
  let restaurantName = document.createElement("p");
  document.querySelector("h4").appendChild(restaurantName);

  restaurantName.textContent = "You should visit " + foodArray[restaurant];
}

let foodGenerator = document.querySelector(".restaurant");
foodGenerator.addEventListener("click", generateFood);

// const newFood = document.createElement("p");
// document.querySelector("body").appendChild(newFood);
// message.textContent = event.target.parentNode.textContent + " Deleted!";
// foodGenerator.style.display = "block";
// foodGenerator.style.backgroundColor = "green";
