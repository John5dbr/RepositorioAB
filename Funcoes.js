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
// Função: Efeito de aparição e sumiço para o conteúdo dos dois links
let links = document.querySelectorAll(`.hdr1_nav_items`);
let elementos = document.querySelectorAll(`.hdr1_ctn`);
const linkBenefObje = links.forEach((el, ind) => {
    el.addEventListener('mouseenter', () => {
        elementos[ind].style = `opacity: 1; transform: translateY(0%);`
    })
    el.addEventListener('mouseout', () => {
        elementos[ind].style = `opacity: 0; transform: translateY(-5.5%);`
    })
})
/*==========================================================*/

export default {
    ClicouMenu: ClicouMenu,
    LinksAdemais: linkBenefObje
};