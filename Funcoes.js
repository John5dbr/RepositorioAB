/*==========================================================*/
// Função: Menu para telas pequenas
let clicks = 0;
let deg = 90;
function ClicouMenu(menu, projetosConcluidos, competencias, avaliacoes, contato) { 
    if (clicks % 2 == 0) {
        menu.style = 'border-radius: 100%;'
        projetosConcluidos.style = 'display: none;'
        competencias.style = 'display: none;'
        avaliacoes.style = 'display: none;'
        contato.style = 'display: none;'
        btnMenu.style = `transform: rotate(${deg}deg);`
    } else {
        menu.style = 'border-radius: 10px;'
        projetosConcluidos.style = 'display: block;'
        competencias.style = 'display: block;'
        avaliacoes.style = 'display: block;'
        contato.style = 'display: block;'
        btnMenu.style = `transform: rotate(${deg}deg);`
    }
    clicks++
    deg += 90
}
/*==========================================================*/

export default {
    ClicouMenu: ClicouMenu
};