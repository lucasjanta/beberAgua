var peso = document.getElementById('peso').value;
const botaomudarbloco = document.getElementById('mudarbloco');
const divpeso = document.querySelector('.qualpeso');
const divqtdagua = document.querySelector('.quantidadeagua');

var qtdagua;

const modalresultado = document.querySelector('.calcularemostrar');
var resultado = document.getElementById('resultado');



function mudarbloco(){
    if (botaomudarbloco.innerHTML == "Definir quantidade de água manualmente"){
        botaomudarbloco.innerHTML = "Calcular quantidade de água baseado no peso";
        divpeso.classList.add('esconderdiv');
        divqtdagua.classList.remove('esconderdiv');
    } else if (botaomudarbloco.innerHTML == "Calcular quantidade de água baseado no peso"){
    botaomudarbloco.innerHTML = "Definir quantidade de água manualmente";
    divpeso.classList.remove('esconderdiv');
    divqtdagua.classList.add('esconderdiv');
}

}

function calcularagua(){
    if (botaomudarbloco.innerHTML == "Definir quantidade de água manualmente"){
        peso = document.getElementById('peso').value;
        qtdagua = peso * 35;
        resultado.innerHTML = qtdagua + "ml";
        modalresultado.style.display = "block";

    } else if(botaomudarbloco.innerHTML == "Calcular quantidade de água baseado no peso"){
        qtdagua = document.getElementById('qtdagua').value;
        resultado.innerHTML = qtdagua + "ml";
        modalresultado.style.display = "block";
    }
}

function fecharmodal(){
    modalresultado.style.display = "none";
}

function aceitarmodal(){
    modalresultado.style.display = "none";
    localStorage.setItem('qtdagua', qtdagua);
    // ir para pagina de resultado
    
    window.location.href = "./controleagua.html";

}


