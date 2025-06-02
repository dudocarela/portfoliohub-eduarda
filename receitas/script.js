const receitas = {
  bolo: `
    <h2>Bolo de Chocolate</h2>
    <p><strong>Ingredientes:</strong></p>
    <ul>
      <li>3 ovos</li>
      <li>1 xícara de açúcar</li>
      <li>1 xícara de leite</li>
      <li>2 xícaras de farinha</li>
      <li>1 xícara de chocolate em pó</li>
      <li>1 colher de fermento</li>
    </ul>
    <p><strong>Modo de preparo:</strong> Misture tudo, leve ao forno por 40 minutos a 180°C.</p>
  `,
  panqueca: `
    <h2>Panquecas Doces</h2>
    <p><strong>Ingredientes:</strong></p>
    <ul>
      <li>1 ovo</li>
      <li>1 xícara de leite</li>
      <li>1 xícara de farinha</li>
      <li>1 colher de açúcar</li>
      <li>1 pitada de sal</li>
    </ul>
    <p><strong>Modo de preparo:</strong> Bata tudo e frite em uma frigideira untada.</p>
  `,
  lasanha: `
    <h2>Lasanha</h2>
    <p><strong>Ingredientes:</strong></p>
    <ul>
      <li>Placas de lasanha</li>
      <li>Molho de tomate</li>
      <li>Queijo e presunto</li>
      <li>Carne moída</li>
    </ul>
    <p><strong>Modo de preparo:</strong> Monte as camadas e leve ao forno por 30 minutos a 200°C.</p>
  `
};

function mostrarReceita(tipo) {
  document.getElementById('receita-texto').innerHTML = receitas[tipo];
  document.getElementById('modal').style.display = 'flex';
}

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}
