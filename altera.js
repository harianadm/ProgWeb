let tam = 2;
function muda(){
    const h1 = document.querySelector("h1");
    h1.style.fontSize = `${tam}em`;

    const h2 = document.querySelector("h2");
    h2.style.fontSize = `${tam}em`;

    const h3 = document.querySelector("h3");
    h3.style.fontSize = `${tam}em`;

    const h4 = document.querySelector("h4");
    h4.style.fontSize = `${tam}em`;

    const h5 = document.querySelector("h5");
    h5.style.fontSize = `${tam}em`;

    const h6 = document.querySelector("h6");
    h6.style.fontSize = `${tam}em`;
}
function aum(){
    while (tam < 9){
        tam += 1
        muda()
    }
}
function dim(){
    if (tam > 1){
        tam -= 1;
        muda()
    }
}