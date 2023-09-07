var bebido = document.getElementById('mlbebido');
var totalabeber = document.getElementById('mltotal');

window.onload = function(){
    totalabeber.innerHTML = localStorage.getItem('qtdagua');
}