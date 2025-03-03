export default function Carrosel(){
    const bolinha1 = document.querySelector('[data-bolinha1]');
    const bolinha2 = document.querySelector('[data-bolinha2]');
    const bolinha3 = document.querySelector('[data-bolinha3]');
    const span = document.querySelector('.span');
    const imagem = document.querySelector('[data-img]');

    bolinha1.addEventListener('click', () => {
        imagem.setAttribute('src', 'img/pokemon/carrosel1.webp');
        span.textContent = 'São mais de 400 criaturas!'
    });
 
    bolinha2.addEventListener('click', () => {
        imagem.setAttribute('src', 'img/pokemon/carrosel2.webp');
        span.textContent = 'Viaje com suas criaturas'
    });

    bolinha3.addEventListener('click', () => {
        imagem.setAttribute('src', 'img/pokemon/carousel_img3.webp');
        span.textContent = 'Batalhe em tempo real'
    });
   
};