const adviceIndex = document.getElementById("advice-index");
const advice = document.getElementById("new-advice");
const dice = document.getElementById("dice");

//Using a random parameter to bust cache each request
let API_URL = "https://api.adviceslip.com/advice?random=" + Math.random();

async function generateAdvice() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch request");
  }
  const data = await response.json();
  adviceIndex.innerHTML = `ADVICE #${data.slip.id}`;
  advice.innerHTML = `"${data.slip.advice}"`;
}

document.addEventListener("DOMContentLoaded", generateAdvice);
dice.addEventListener("click", generateAdvice);
