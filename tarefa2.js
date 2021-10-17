const titulos = document.querySelectorAll('h2');
const topicos = new Array();
titulos.forEach(titulo => {
  topicos.push(titulo.textContent);
});
lista = document.querySelector('ol');
topicos.forEach(topico => {
  const item = document.createElement('li');
  item.textContent = topico;
  lista.append(item);
});
