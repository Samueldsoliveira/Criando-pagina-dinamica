function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');//Const que tem todos as teclas do CSS armazenadas

let contador = 0;

//para
for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];//Renomeou o nome da const "listaDeTeclas" para "tecla"
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    
    listaDeTeclas[contador].onclick = function (){
        tocaSom(idAudio);
    }
  
}
