// AQUI PROCURA OS ELEMENTOS NO HTML E COLOCA ELES NAS VARIAVEIS
const containerfilter = document.querySelector(".containerfilter");
const painelfiltro = document.getElementById("painelfiltro");

// QUANDO ACONTECER O EVENTO DE PASSAR O MOUSE POR CIMA, VAI EXECUTAR A FUNCAO
containerfilter.addEventListener("mouseenter", function() {
  // ADICIONA A FUNCAO ACTIVE
  painelfiltro.classList.add("active");
});
// QUANDO ACONTECER O EVENTO DE TIRAR O MOUSE DE CIMA, VAI EXECUTAR A FUNCAO
containerfilter.addEventListener("mouseleave", function() {
    // REMOVE A CLASSE ACTIVE
    painelfiltro.classList.remove("active");
});