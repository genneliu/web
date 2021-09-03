console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Submission Unsuccessful");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);

//compliment event
function freeCompliment(event) {
  alert("You're beautiful");
}

let picture = document.querySelector("img");
picture.addEventListener("mouseover", freeCompliment);
