const titulos = document.querySelectorAll('h2');
const topicos = new Array();
titulos.forEach(element => {
	topicos.push(element.textContent);
	const seguro = document.createElement('a');
	seguro.setAttribute('name', element.textContent);
	element.append(seguro);
	const volta = document.createElement('a');
	volta.setAttribute('href', '#');
	volta.textContent = "Sumário";
	element.parentElement.insertBefore(volta, element.nextElementSibling);
});
const lista = document.querySelector('ol');
topicos.forEach(topico => {
	const item = document.createElement('li');
	lista.append(item);
	const link = document.createElement('a');
	link.setAttribute('href', `#${topico}`);
	link.textContent = topico;
	item.append(link);
});