export default function Clan(){
    const naturia = document.querySelector('[data-naturia]');
    const malefic = document.querySelector('[data-malefic]');
    const wingeon = document.querySelector('[data-wingeon]');
    const raibolt = document.querySelector('[data-raibolt]');
    const volcanic = document.querySelector('[data-volcanic]');
    const gardestrike = document.querySelector('[data-gardestrike]');
    const orebound = document.querySelector('[data-orebound]');
    const psycraft = document.querySelector('[data-psycraft]');
    const seavel = document.querySelector('[data-seavel]');
    const ironhard = document.querySelector('[data-ironhard]');

    malefic.addEventListener('click', () => {
        const banner = document.querySelector('[data-banner]');
        const img = document.querySelector('[data-img-banner]')
        const titulo = document.querySelector('[data-titulo]');
        banner.src = 'img/arvores_clan/malefic_element.webp';
        img.src = 'img/arvores_clan/malefic_clan_img.webp';
        titulo.innerHTML = 'Malefic';
    })

   naturia.addEventListener('click', () =>  {
        const banner = document.querySelector('[data-banner]');
        const img = document.querySelector('[data-img-banner]')
        const titulo = document.querySelector('[data-titulo]');
        banner.src = 'img/arvores_clan/naturia_element.webp';
        img.src = 'img/arvores_clan/naturia_clan_img.webp';
        titulo.innerHTML = 'Naturia';
   })

   
   wingeon.addEventListener('click', () =>  {
    const banner = document.querySelector('[data-banner]');
    const img = document.querySelector('[data-img-banner]')
    const titulo = document.querySelector('[data-titulo]');
    banner.src = 'img/arvores_clan/wingeon_element.webp';
    img.src = 'img/arvores_clan/wingeon_clan_img.webp';
    titulo.innerHTML = 'Wingeon';
    })

    raibolt.addEventListener('click', () =>  {
        const banner = document.querySelector('[data-banner]');
        const img = document.querySelector('[data-img-banner]')
        const titulo = document.querySelector('[data-titulo]');
        banner.src = 'img/arvores_clan/raibolt_element.webp';
        img.src = 'img/arvores_clan/raibolt_clan_img.webp';
        titulo.innerHTML = 'Raibolt';
    })

    volcanic.addEventListener('click', () =>  {
        const banner = document.querySelector('[data-banner]');
        const img = document.querySelector('[data-img-banner]')
        const titulo = document.querySelector('[data-titulo]');
        banner.src = 'img/arvores_clan/volcanic_element.webp';
        img.src = 'img/arvores_clan/volcanic_clan_img.webp';
        titulo.innerHTML = 'Volcanic';
    })

    gardestrike.addEventListener('click', () =>  {
        const banner = document.querySelector('[data-banner]');
        const img = document.querySelector('[data-img-banner]')
        const titulo = document.querySelector('[data-titulo]');
        banner.src = 'img/arvores_clan/gardestrike_element.webp';
        img.src = 'img/arvores_clan/gardestrike_clan_img.webp';
        titulo.innerHTML = 'Gardetrike';
    })

    orebound.addEventListener('click', () =>  {
        const banner = document.querySelector('[data-banner]');
        const img = document.querySelector('[data-img-banner]')
        const titulo = document.querySelector('[data-titulo]');
        banner.src = 'img/arvores_clan/orebound_element.webp';
        img.src = 'img/arvores_clan/orebound_clan_img.webp';
        titulo.innerHTML = 'Orebound';
    })

    psycraft.addEventListener('click', () =>  {
        const banner = document.querySelector('[data-banner]');
        const img = document.querySelector('[data-img-banner]')
        const titulo = document.querySelector('[data-titulo]');
        banner.src = 'img/arvores_clan/psycraft_element.webp';
        img.src = 'img/arvores_clan/psycraft_clan_img.webp';
        titulo.innerHTML = 'Psycraft';
    })

    seavel.addEventListener('click', () =>  {
        const banner = document.querySelector('[data-banner]');
        const img = document.querySelector('[data-img-banner]')
        const titulo = document.querySelector('[data-titulo]');
        banner.src = 'img/arvores_clan/seavell_element.webp';
        img.src = 'img/arvores_clan/seavell_clan_img.webp';
        titulo.innerHTML = 'SeavelL';
    })

    ironhard.addEventListener('click', () =>  {
        const banner = document.querySelector('[data-banner]');
        const img = document.querySelector('[data-img-banner]')
        const titulo = document.querySelector('[data-titulo]');
        banner.src = 'img/arvores_clan/ironhard_element.webp';
        img.src = 'img/arvores_clan/ironhard_clan_img.webp';
        titulo.innerHTML = 'Ironhard';
    })
}