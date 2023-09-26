const card = document.getElementById("card");

let isFlliped = false;

card.addEventListener("click", () => {
  if (!isFlliped) {
    card.style.transform = "rotateY(180deg)";
  } else {
    card.style.transform = "rotateY(0deg)";
  }

  //? 토글
  isFlliped = !isFlliped;
});
