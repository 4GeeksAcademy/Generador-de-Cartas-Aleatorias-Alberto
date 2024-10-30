function generateRandomCard() {
  const suits = [
    { class: "spade", symbol: "♠" },
    { class: "club", symbol: "♣" },
    { class: "heart", symbol: "♥" },
    { class: "diamond", symbol: "♦" }
  ];

  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const card = document.getElementById("card");
  const cardValue = document.getElementById("card-value");
  const topSymbol = document.getElementById("top-symbol");
  const bottomSymbol = document.getElementById("bottom-symbol");

  // Asignar la clase del palo
  card.className = `card ${randomSuit.class}`;
  topSymbol.textContent = randomSuit.symbol;
  bottomSymbol.textContent = randomSuit.symbol;

  // Asignar el valor de la carta
  cardValue.textContent = randomValue;
}
