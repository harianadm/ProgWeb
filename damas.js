const tamCel = 40;
let pId = 0;
let lugar = 80;
let plugar = 81;
let classe = '';
document.body.append(tabuleiro());

function tabuleiro() {
    const tam = 8;
    let tabela = document.createElement('table');

    tabela.style.borderStyle = 'solid';
    tabela.style.borderSpacing = 0;
    tabela.style.margin = 'auto';

    for (let i = 0; i < tam; i++) {
        let linha = document.createElement('tr');
        tabela.append(linha);
        for (let j = 0; j < tam; j++) {
            let celula = document.createElement('td');
			celula.setAttribute('id',i + 99);
            linha.append(celula);
            celula.style.width = `${tamCel}px`;
            celula.style.height = `${tamCel}px`;
			pId += 1;
            if (i % 2 == j % 2) {
                celula.style.backgroundColor = 'black';
				celula.setAttribute("class","droptarget");
                if (i * 8 + j <= 24) {
                    celula.append(peca('black',pId));
                } else if (i * 8 + j >= 40) {
                    celula.append(peca('red',pId));
                }
            } else {
                celula.style.backgroundColor = 'white';
            }
        }
    };
	
    return tabela;	
}

function peca(cor,ide) {
		let imagem = document.createElement('img');
		imagem.setAttribute('src', `img/${cor}.png`);
		imagem.setAttribute('width', `${tamCel-4}px`);
		imagem.setAttribute('height', `${tamCel-4}px`);
		imagem.setAttribute('draggable','true');
		imagem.setAttribute('id', ide);
		imagem.setAttribute('class', cor);
		
    return imagem;
}

function dragover() {
	document.addEventListener("dragover", function(event) {
	  event.preventDefault();
	});
}

function dragend() {
	document.addEventListener("dragend", function(event) {
	});
}

function dragstart(){
	document.addEventListener("dragstart", function(event) {
	  event.dataTransfer.setData("Text", event.target.id);
	  lugar = event.path[1].id;
	  classe = (event.path[0].className);
	});
}

function drop(){
	document.addEventListener("drop", function(event) {
	event.preventDefault();
	if ( event.target.className == "droptarget") {
		const data = event.dataTransfer.getData("Text");
		let c = event.path[0];
		let t = c.childElementCount;
		plugar = event.target.id;
		if(t == '0' && lugar != plugar){
			if(classe == 'red' && lugar > plugar && lugar - plugar == 1|| classe == 'black' && lugar < plugar && plugar - lugar == 1) {
				event.target.appendChild(document.getElementById(data));
			}
		}
	}
	});
}
dragover();
dragend();
dragstart();
drop();
