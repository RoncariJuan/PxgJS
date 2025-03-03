export default function menuHambu(){
    const btnMenu = document.querySelector('[data-menu]');
     
    btnMenu.addEventListener('click', () => {
        const sessao = document.querySelectorAll('.initMenu');
        
        sessao.forEach(item => {
            item.classList.toggle('active');
            console.log(item)
        })
    })
}