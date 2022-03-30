const contentPage = document.querySelector('.content-page');
const button = document.querySelector('.button');
const fechar = document.querySelector('.fechar');

//abrir
button.addEventListener('click', () => {
    contentPage.style.opacity = '1';
    contentPage.style.visibility = 'visible';
})

//fechar
fechar.addEventListener('click', () => {
    contentPage.style.opacity = '0';
    contentPage.style.visibility = 'hidden';
})