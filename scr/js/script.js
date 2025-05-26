const compliments = [
  "Seu abraço é a minha zona de conforto favorita.",
  "O Sol teria inveja da maneira que você ilumina a minha vida.",
  "Estar ao seu lado é o meu lugar favorito no mundo.",
  "Você é a única pessoa com quem eu toparia ir até o Armazém... sem medo de apanhar!"
];

function showCompliment() {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  const complimentElement = document.getElementById('compliment');
  complimentElement.style.opacity = 0;

  setTimeout(() => {
    complimentElement.textContent = compliments[randomIndex];
    complimentElement.style.opacity = 1;
  }, 300);
}
