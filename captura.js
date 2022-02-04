const tamCel = 40;
let pId = 0;
let lugar = 80;
let lf = 81;
let classe = '';
let classec= 0;
let lCap = '';
document.body.append(tabuleiro());

function tabuleiro() {
    const tamanho = 8;
    let tabela = document.createElement('table');

    tabela.style.borderStyle = 'solid';
    tabela.style.borderSpacing = 0;
    tabela.style.margin = 'auto';

    for (let i = 0; i < tamanho; i++) {
        let linha = document.createElement('tr');
        tabela.append(linha);
        for (let j = 0; j < tamanho; j++) {
            let celula = document.createElement('td');
			celula.setAttribute('id',`${j}` + '-' + `${i}`);
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
    }
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
	  lugar = event.path[1].id.toString();
	  classe = (event.path[0].className);
	  
	});
}

function drop(){
	document.addEventListener("drop", function(event) {
	event.preventDefault();
	if ( event.target.className == "droptarget") {
		const data = event.dataTransfer.getData("Text");
		let n = event.path[0];
		let e = n.childElementCount;
		plugar = event.target.id;
		let x1 = lugar.substring(0,1);
		let y1 = lugar.substring(2,3);
		let x2 = plugar.substring(0,1);
		let y2 = plugar.substring(2,3);
		
		if(classe == 'black' && x2 < x1) {
			lCap = (parseInt(x1) - 1).toString() + "-" + (parseInt(y1) + 1).toString();
		} else if (classe == 'black' && x2 > x1) {
			lCap = (parseInt(x1) + 1).toString() + "-" + (parseInt(y1) + 1).toString();
		} else if (classe == 'red' && x2 > x1) {
			lCap = (parseInt(x1) + 1).toString() + "-" + (parseInt(y1) - 1).toString();
		} else if (classe == 'red' && x2 < x1) {
			lCap = (parseInt(x1) - 1).toString() + "-" + (parseInt(y1) - 1).toString();
		}
		tx = document.getElementById(lCap);
		if(tx.childElementCount == '1') {
			classec = tx.firstElementChild.className;
			pc = tx.firstElementChild;
			//console.log(lCap);
			//console.log(pc);
		}
		if(e == '0' && y1 != y2) {
			if(classe == "red" && y1 > y2 && y1 - y2 == 1 || y1 - y2 == 2 && classec == 'black' || classe == 'black' && y1 < y2 && y1 - y2 == -1 || y1 - y2 == -2 && classec == 'red') {
				event.target.appendChild(document.getElementById(data));
				if(y1 - y2 == 2 || y1 - y2 == -2) {
					pc.remove();
					classec = '';
				}
			}
			
		}
	}
	});
}

dragstart();
dragend();
dragover();
drop();