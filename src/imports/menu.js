const btnMenu = document.getElementById('btn-menu');
const btnFechar = document.getElementById('btn-fechar');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');
const linksMenu = document.querySelectorAll('.menu-mobile a');

function abrirMenu() {
    menu.classList.add('abrir-menu');
    overlay.classList.add('ativo');
    document.body.classList.add('menu-aberto');
}

function fecharMenu() {
    menu.classList.remove('abrir-menu');
    overlay.classList.remove('ativo');
    document.body.classList.remove('menu-aberto');
}

btnMenu.addEventListener('click', abrirMenu);
btnFechar.addEventListener('click', fecharMenu);
overlay.addEventListener('click', fecharMenu);

linksMenu.forEach((link) => {
    link.addEventListener('click', fecharMenu);
});
