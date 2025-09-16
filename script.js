const imagens = [
    'imagem1.jpg',
    'imagem2.jpg',
    'imagem3.jpg'
];
let index = 0;
// Slideshow cíclico com fade suave
const heroBg = document.querySelector('.hero-bg');
const heroFade = document.querySelector('.hero-bg.next');


heroBg.style.backgroundImage = `url('${imagens[index]}')`;
setInterval(() => {
    index = (index + 1) % imagens.length;
    heroFade.style.backgroundImage = `url('${imagens[index]}')`;
    heroFade.style.opacity = 1;
        setTimeout(() => {
        heroBg.style.backgroundImage = heroFade.style.backgroundImage;
        heroFade.style.opacity = 0;

    }, 1000); // 1000ms = tempo do fade
}, 3000);




