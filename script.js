function insert(num) {
  const tela = document.querySelector(".tela"); // Seleciona o elemento da tela
  tela.textContent += num; // Adiciona o número ou operador à tela sem espaços adicionais
}

function clean() {
  const tela = document.querySelector(".tela"); // Seleciona o elemento da tela
  tela.textContent = ""; // Limpa a tela
}

function back() {
  const tela = document.querySelector(".tela"); // Seleciona o elemento da tela
  tela.textContent = tela.textContent.slice(0, -1); // Remove o último caractere da tela
}

function calcular() {
  const tela = document.querySelector(".tela"); // Seleciona o elemento da tela
  try {
    if (tela.textContent) {
      // Avalia a expressão matemática na tela
      tela.textContent = eval(tela.textContent); // Use eval com cautela ou substitua por um parser mais seguro
    } else {
      tela.textContent = "Sem comando..."; // Mensagem para tela vazia
    }
  } catch (error) {
    tela.textContent = "Erro"; // Mostra "Erro" caso a expressão seja inválida
  }
}
