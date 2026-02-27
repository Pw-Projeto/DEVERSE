// AQUI PROCURA OS ELEMENTOS NO HTML E COLOCA ELES NAS VARIAVEIS
const containerfilter = document.querySelector(".containerfilter");
const painelfiltro = document.getElementById("painelfiltro");

// QUANDO ACONTECER O EVENTO DE CLICAR NO BOTAO, VAI EXECUTAR A FUNCAO
containerfilter.addEventListener("mouseenter", function() {
  // ESSA FUNCAO DIZ QUE SE TIVER A CLASSE ACTIVE, REMOVE E SE NAO TIVER COLOCA
  painelfiltro.classList.add("active");
});
// QUANDO ACONTECER O EVENTO DE CLICAR EM QUALQUER LUGAR DA TELA, VAI EXECUTAR A FUNCAO
containerfilter.addEventListener("mouseleave", function(event) {
    // REMOVE A CLASSE ACTIVE
    painelfiltro.classList.remove("active");
});