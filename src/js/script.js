// AQUI PROCURA OS ELEMENTOS NO HTML E COLOCA ELES NAS VARIAVEIS
const btnfiltro = document.getElementById("btnfiltro");
const painelfiltro = document.getElementById("painelfiltro");

// QUANDO ACONTECER O EVENTO DE CLICAR NO BOTAO, VAI EXECUTAR A FUNCAO
btnfiltro.addEventListener("click", function() {
  // ESSA FUNCAO DIZ QUE SE TIVER A CLASSE ACTIVE, REMOVE E SE NAO TIVER COLOCA
  painelfiltro.classList.toggle("active");
});
// QUANDO ACONTECER O EVENTO DE CLICAR EM QUALQUER LUGAR DA TELA, VAI EXECUTAR A FUNCAO
document.addEventListener("click", function(event) {
  // SE O CLIQUE NAO FOI DENTRO DO PAINEL E NAO FOI DENTRO DO BOTAO, ENTAO EXECUTE O QUE ESTA ABAIXO.
  if (!painelfiltro.contains(event.target) && !btnfiltro.contains(event.target)) {
    // REMOVE A CLASSE ACTIVE
    painelfiltro.classList.remove("active");
}});