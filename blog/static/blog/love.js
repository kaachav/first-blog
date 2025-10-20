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