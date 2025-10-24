<button id="theme-btn">Сменить тему 💡</button>

<script>
const btn = document.getElementById('theme-btn');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

</script>

<style>
.dark {
  background-color: #1a1a1a;
  color: #ffb6c1;
}
button {
  background: #ffc0cb;
  border: none;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
  background: #ff91a4;
}
</style>

const quotes = [
  "“Иногда, чтобы услышать себя — нужно просто замолчать.”",
  "“Ты не опоздал. Ты просто идёшь в своём темпе.”",
  "“Счастье — это когда внутри спокойно.”",
  "“Никто не торопится в вечность, но все бегут куда-то.”",
  "“Любовь — это когда молчание звучит громче слов.”",
  "“Иди медленно. Мир подождёт.”"
];

function newQuote() {
  const quoteText = document.getElementById("quote");
  const random = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[random];
}

// --- обработчик кнопки смены темы ---
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
