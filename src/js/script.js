const filterContainer = document.querySelector(".filtro-wrapper");
const filterBtn = document.getElementById("btnfiltro");
const filterPanel = document.getElementById("painelfiltro");

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