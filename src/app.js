function getRandomValue() {
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

function getRandomSuit() {
  const suits = [
    { class: "heart", symbol: "♥" },
    { class: "diamond", symbol: "♦" },
    { class: "spade", symbol: "♠" },
    { class: "club", symbol: "♣" }
  ];
  const randomIndex = Math.floor(Math.random() * suits.length);
  return suits[randomIndex];
}

function generateRandomCard() {
  const cardElement = document.querySelector(".card");

  const randomValue = getRandomValue();
  const randomSuit = getRandomSuit();

  const cardHTML = `
    <!-- Símbolo superior izquierdo -->
    <div class="card-suit top-suit ${randomSuit.class}">${randomSuit.symbol}</div>
    <!-- Número en el centro -->
    <div class="card-number">${randomValue}</div>
    <!-- Símbolo inferior derecho -->
    <div class="card-suit bottom-suit ${randomSuit.class}">${randomSuit.symbol}</div>
  `;

  cardElement.innerHTML = cardHTML;
}

window.onload = generateRandomCard;
