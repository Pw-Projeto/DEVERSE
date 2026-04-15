const filterContainer = document.querySelector(".filtro-wrapper");
const filterBtn = document.getElementById("btnfiltro");
const filterPanel = document.getElementById("painelfiltro");
const pesquisaContainer = document.querySelector(".search-box");
const pesquisaInput = document.querySelector(".search-input");
const pesquisaBtn = document.querySelector(".buscar");


// TOGGLE
filterBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  filterPanel.classList.toggle("is-active");
});

// NÃO FECHAR AO CLICAR DENTRO
filterPanel.addEventListener("click", function (e) {
  e.stopPropagation();
});

// FECHAR AO CLICAR FORA
document.addEventListener("click", function () {
  filterPanel.classList.remove("is-active");
});


pesquisaBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  pesquisaInput.classList.toggle("is-active");
});

pesquisaInput.addEventListener("click", function (e) {
  e.stopPropagation();
});