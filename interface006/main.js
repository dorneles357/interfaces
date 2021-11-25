document.querySelector('#btnRes').addEventListener('click', review);

document.querySelector('#btnRes').addEventListener('touchstart', review);

function review(event){
    //Identica o evento e aplica o método viável
    if(event.type === 'touchstart') event.preventDefault();

    document.querySelector('#navbarNav').classList.toggle('active');
    
    //retorna true/false caso exista ou não a classe
    const active = document.querySelector('#navbarNav').classList.contains('active');

    //
    event.currentTarget.setAttribute('aria-expanded', active);

    //Assecibilidade
    if(active) 
        event.currentTarget.setAttribute('aria-label','Fechar Menu');
    else
        event.currentTarget.setAttribute('aria-label','Abrir Menu');

}