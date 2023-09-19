var bebido = document.getElementById('mlbebido');
var totalabeber = document.getElementById('mltotal');
var numeroml = document.getElementById('numeromlcopo');
const selecionarcopo = document.querySelector('.selecionarcopo');
var aguabebida;
var quantidadeprogressodia;
var quantidadeprogressoagua;
const listacoposmodal = document.getElementById('listacoposmodal');

const qtdagua = parseInt(localStorage.getItem('qtdagua'));

const progressoagua = document.querySelector('.progressoagua');

const progressodia = document.querySelector('.progressodia');

//Fazendo a hora em tempo real

/* let dataAtual = new Date();
let dataFormatada = dataAtual.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
dataFormatada = dataFormatada + ' ' + dataAtual.toLocaleTimeString('pt-BR');
console.log(dataFormatada);
let horaAtual = dataAtual.getHours(); */


const botaocopo200ml = document.getElementById('200ml');
const botaocopo250ml = document.getElementById('250ml');
const botaocopo300ml = document.getElementById('300ml');
const botaocopo500ml = document.getElementById('500ml');
const botaocopo750ml = document.getElementById('750ml');
const botaocopo1000ml = document.getElementById('1000ml');
window.onload = function(){
    if (localStorage.getItem('aguabebida') == null){
        console.log('criando variavel e setando pra 0');
        localStorage.setItem('aguabebida', '0');
        aguabebida = parseInt(localStorage.getItem('aguabebida'));
        bebido.innerHTML = aguabebida;
    } else {
        aguabebida = parseInt(localStorage.getItem('aguabebida'));
        bebido.innerHTML = aguabebida;
    }


    totalabeber.innerHTML = qtdagua;
    bebido.innerHTML = localStorage.getItem('aguabebida');
    atualizaragua();
    atualizardia();
}

function mostrarnumero(){
    numeroml.innerHTML = document.getElementById('rangeml').value + "ml";
}

function calcularagua(){
    var novaaguabebida = parseInt(document.getElementById('rangeml').value) + parseInt(localStorage.getItem('aguabebida'));
    localStorage.setItem('aguabebida', novaaguabebida);
    bebido.innerHTML = novaaguabebida;
    aguabebida = parseInt(localStorage.getItem('aguabebida'));
    bebido.innerHTML = aguabebida;
    atualizaragua();
    atualizardia();
   
   /* window.location.href = "./controleagua.html"; */
}

function atualizaragua(){
    quantidadeprogressoagua = (parseInt(localStorage.getItem('aguabebida')) * 100) / qtdagua;
    progressoagua.style.height = quantidadeprogressoagua + "%";
}

function removeragua(){
    var novaaguabebida = parseInt(localStorage.getItem('aguabebida')) - parseInt(document.getElementById('rangeml').value);
    if (novaaguabebida < 0){
        novaaguabebida = 0;}
    localStorage.setItem('aguabebida', novaaguabebida);
    bebido.innerHTML = novaaguabebida;
    atualizaragua();
    /* window.location.href = "./controleagua.html"; */
}

function atualizardia(){
    let dataAtual = new Date();
    let horario = dataAtual.toLocaleTimeString('pt-BR');
    horario = parseInt(horario.slice(0, 2));
    quantidadeprogressodia = (horario * 100) / 24;
    progressodia.style.height = quantidadeprogressodia + "%";
}

selecionarcopo.addEventListener('click', ()=>{
    if (listacoposmodal.style.display == "none"){
        listacoposmodal.style.display = "grid";
    } else if(listacoposmodal.style.display == "grid"){ 
        listacoposmodal.style.display = "none";
    } else{
        listacoposmodal.style.display = "grid";
    }


    listacoposmodal.style.top = selecionarcopo.offsetTop + 100 + "px";

});

botaocopo200ml.addEventListener('click', ()=>{
    var mldocopo = 200;

    // mudar o input range
    document.getElementById('rangeml').value = mldocopo;
    mostrarnumero();
    
})


botaocopo250ml.addEventListener('click', ()=>{
    var mldocopo = 250;

    // mudar o input range
    document.getElementById('rangeml').value = mldocopo;
    mostrarnumero();
    
})


botaocopo300ml.addEventListener('click', ()=>{
    var mldocopo = 300;

    // mudar o input range
    document.getElementById('rangeml').value = mldocopo;
    mostrarnumero();
    
})


botaocopo500ml.addEventListener('click', ()=>{
    var mldocopo = 500;

    // mudar o input range
    document.getElementById('rangeml').value = mldocopo;
    mostrarnumero();
    
})


botaocopo750ml.addEventListener('click', ()=>{
    var mldocopo = 750;

    // mudar o input range
    document.getElementById('rangeml').value = mldocopo;
    mostrarnumero();
    
})


botaocopo1000ml.addEventListener('click', ()=>{
    var mldocopo = 1000;

    // mudar o input range
    document.getElementById('rangeml').value = mldocopo;
    mostrarnumero();
    
})





    


