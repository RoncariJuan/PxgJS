export default function English(){
    const english1 = document.querySelector('[data-bolinha-eng1]');
    const english2 = document.querySelector('[data-bolinha-eng2]');
    const english3 = document.querySelector('[data-bolinha-eng3]');
    const sociais = document.querySelector('.sociais');
    
    english1.addEventListener('click', () => {
       const span = document.querySelector('[data-span-eng]');
       span.textContent = 'There are over 400 creatures!';
    });
    
    english2.addEventListener('click', () => {
        const span = document.querySelector('[data-span-eng]');
        span.textContent = 'Travel with your creatures!';
     });

    english3.addEventListener('click', () => {
        const span = document.querySelector('[data-span-eng]');
        span.textContent = 'Fight in real-time!';
    });
}