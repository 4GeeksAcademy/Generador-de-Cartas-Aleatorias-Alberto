// src/app.js

// Función para generar un valor aleatorio de carta (2-10, Jota, Reina, Rey, As)
function getRandomValue() {
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

// Función para generar un palo aleatorio (corazones, picas, tréboles, diamantes)
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

// Función para generar y mostrar una carta aleatoria
function generateRandomCard() {
  const cardElement = document.querySelector(".card-spanish");

  // Obtener un valor y un palo aleatorios
  const randomValue = getRandomValue();
  const randomSuit = getRandomSuit();

  // Actualizar el número central de la carta
  const numberElement = cardElement.querySelector(".card-number");
  numberElement.textContent = randomValue;

  // Actualizar los símbolos de la carta
  const suitElements = cardElement.querySelectorAll(".card-suit");
  suitElements.forEach(element => {
    element.textContent = randomSuit.symbol;
  });

  // Remover cualquier clase de palo existente y añadir la clase del palo aleatorio
  cardElement.classList.remove("heart", "diamond", "spade", "club");
  cardElement.classList.add(randomSuit.class);
}

// Ejecutar la función `generateRandomCard` al cargar la página
window.onload = generateRandomCard;
