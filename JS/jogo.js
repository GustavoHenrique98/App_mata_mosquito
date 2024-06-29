let altura;
let largura;
let vidas = 1;


//Ajuste de tamanho de tela  com o evento onresize capturando o palco do jogo em tempo real. (BODY)
function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight;
     largura = window.innerWidth;
    
    }
    
     //Acessando as coordenadas do tamanho da tela se baseando no body .
     ajustaTamanhoPalcoJogo();
    
function posicaoRandomica(){
   
   //Remover o mosquito Anterior(caso exista)
    if( document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        //Alterando corações se baseando na variável globas vidas que está sendo incrementada toda vez que o
        //mosquito continua existindo.

        if(vidas>3){
            window.location.href="fim_de_jogo.html"
            
        }else{
            document.getElementById("v" + vidas).src="../IMG/coracao_vazio.png"
            vidas++

        }
        
    }
    
    
    
    


    //Sincronizando as coordenadas da página com a posição do mosquito
    let posicaox= Math.floor(Math.random() * largura) -90;
    let posicaoy= Math.floor(Math.random() * altura) -90;
    posicaox = posicaox <0 ? 0 : posicaox;
    posicaoy = posicaoy <0 ? 0 : posicaoy;
    // console.log(posicaox,posicaoy);

    //Criando  elemento HTML da imagem do mosquito
    let mosquito = document.createElement('img');
    //Atribuindo a imagem ao elemento
    mosquito.src = "../IMG/mosca.png"
    //--------------------------------------------------------------------------------------------
    //Trocando de classe de acordo com números randômicos que retornam strings nas funções abaixo.
    mosquito.className = tamanhoAleatorio() + ' '+ ladoAleatorioDoMosquito();

    //Definindo posições randômicas que os mosquitos irão aparecer e adicionando
    mosquito.style.left = posicaox + 'px';
    mosquito.style.top = posicaoy + 'px';
    mosquito.style.top = posicaoy + 'px';
    mosquito.style.position = "absolute"
    //--------------------------------------------------------------------------------------------

    //Definindo que o mosquito terá um id (que será removido toda vez que ele reaparecer em uma cordenada diferente)
    mosquito.id="mosquito"
    //Criando um elemento filho para o body
    document.body.appendChild(mosquito);

    //Criando evento que ao clicar no mosquito ele é eliminado
    mosquito.onclick = function(){ 
        this.remove()
    }

    
}


function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 2)

    switch(classe){
    case 0 : 
        return 'mosquito1'
            
    case 1: 
        return 'mosquito2'
            
    case 2: 
        return 'mosquito2'
    }
}


function ladoAleatorioDoMosquito(){
    let ladoAleatorio = Math.floor(Math.random() * 2)

    switch(ladoAleatorio){
    case 0 : 
        return 'LadoA';
            
    case 1: 
        return 'LadoB';
            
    
    }
}

/*Criando cronometro */
let tempo = 10;

let cronometro = setInterval(function(){
    tempo -=1
    if(tempo <0){
        clearInterval(cronometro);
        clearInterval(criaMosca);
        window.location.href="vitoria.html"
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
},1000);


/* iniciar Jogo*/
//Obtendo a url para tratar com estruturas de controle
let nivelURL = window.location.search;
//Exibindo
nivelURL = nivelURL.replace('?','');

//Criando o tempo da criação das moscas
let criaMoscaTempo;

if(nivelURL ==="normal"){
criaMoscaTempo = 1500;

}else if(nivelURL ==="dificil"){
    criaMoscaTempo = 1000;

}else if(nivelURL ==="chucknorris"){
    criaMoscaTempo = 750;

}

function iniciarJogo(){
     let nivel = document.getElementById('nivel').value
     if(nivel ===""){
        alert("SELECIONE UMA DIFICULDADE!")
        return false
    }
    window.location.href="App.html?" + nivel

}