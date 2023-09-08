var bebido = document.getElementById('mlbebido');
var totalabeber = document.getElementById('mltotal');
var numeroml = document.getElementById('numeromlcopo');
var aguabebida;
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


    totalabeber.innerHTML = localStorage.getItem('qtdagua');
    bebido.innerHTML = localStorage.getItem('aguabebida');
}

function mostrarnumero(){
    numeroml.innerHTML = document.getElementById('rangeml').value + "ml";
}

function calcularagua(){
    var novaaguabebida = parseInt(document.getElementById('rangeml').value) + aguabebida;
   localStorage.setItem('aguabebida', novaaguabebida);
   bebido.innerHTML = novaaguabebida;
   window.location.href = "./controleagua.html";
}



    



