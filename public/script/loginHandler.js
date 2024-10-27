document.getElementById('loginForm').addEventListener('submit', async (e) => {
e.preventDefault();
  const form = e.target;
  const username = form.username.value;
  const password = form.password.value;
})