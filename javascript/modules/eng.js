export default function English(){
    const english1 = document.querySelector('[data-bolinha-eng1]');
    const english2 = document.querySelector('[data-bolinha-eng2]');
    const english3 = document.querySelector('[data-bolinha-eng3]');
    const sociais = document.querySelector('.sociais');
    
    english1.addEventListener('click', () => {
       const span = document.querySelector('[data-span-eng]');
       const imagem1 = document.querySelector('[data-img]');
       imagem1.src = 'img/Fundos/carrosel1.png';
       span.textContent = 'There are over 400 creatures!';
    });
    
    english2.addEventListener('click', () => {
        const span = document.querySelector('[data-span-eng]');
        const imagem1 = document.querySelector('[data-img]');
        imagem1.src = 'img/Fundos/carrosel2.png';
        span.textContent = 'Travel with your creatures!';
     });

    english3.addEventListener('click', () => {
        const span = document.querySelector('[data-span-eng]');
        const imagem1 = document.querySelector('[data-img]');
        imagem1.src = 'img/Fundos/carrosel3.png';
        span.textContent = 'Fight in real-time!';
    });
}