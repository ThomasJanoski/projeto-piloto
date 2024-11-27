// Arquivo das automações do Menu Hamburguer

// Selecionando o botão menu pelo seu ID utilizando 'const'
// Modificar posteriormente

const btnMobile = document.getElementById("btn-mobile")

/**
 * Função que alterna o estado do menu (aberto/fechado)
 * @param {Event} - Evento que dispara a função, como 'click' ou 'touchstart'
 */
function toggleMenu(event) {
    // Evita o comportamento padrão do evento 'touchstart', evitadno bug em dispositivos móveis
    if (event.type == 'touchstart') event.preventDefault()

    // Selectiona o elemen to de navegação pelo seu ID
    const nav = document.getElementById("nav")

    // Adiciona ou remove a classe 'active' no elemento de navegação, ativando ou desativando o menu
}