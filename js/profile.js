//favorite color
function favColor() {
  alert("Navy Blue");
}

let colorButton = document.querySelector("#color");
colorButton.addEventListener("click", favColor);

//favorite place
function favPlace() {
  alert("Himalayas; Central and South Asia");
}

let placeButton = document.querySelector("#place");
placeButton.addEventListener("click", favPlace);

//favorite ritual
function favRitual() {
  alert("Taking a moment to take in all the sights");
}

let ritualButton = document.querySelector("#ritual");
ritualButton.addEventListener("click", favRitual);
