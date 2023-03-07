function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento === null){

        console.log('Elemento não encontrado')

    }

    if(elemento != null){

        
        //elemento.play();

        if(elemento.localName === 'audio'){
            elemento.play();
        }

    }
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

    tecla.onkeydown = function(evento){

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }

    }
  
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}
