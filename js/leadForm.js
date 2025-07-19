document.getElementById('leadForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const celular = document.getElementById('celular').value;

  fetch('https://script.google.com/macros/s/AKfycbyOZfOD9r2R0dhK-WQZRRb8VPizDzzzFpSusoLc7mj8cfVezmgYA_3QXkCmGCUcD6Wi/exec', {
    method: 'POST',
    body: JSON.stringify({ nome, email, celular }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('leadForm').reset();
    document.getElementById('successMessage').style.display = 'block';
  })
  .catch(err => console.error('Erro ao enviar lead:', err));
});