// menu responsivo
const menuHamburger = document.getElementById('menu-hamburger');
const barraNavegacao = document.getElementById('barra-navegacao').querySelector('ul');

menuHamburger.addEventListener('click', () => {
    barraNavegacao.classList.toggle('ativo');
    menuHamburger.classList.toggle('ativo');
});

// fchar o menu ao clicar
const linksNavegacao = barraNavegacao.querySelectorAll('a');
linksNavegacao.forEach(link => {
    link.addEventListener('click', () => {
        if (barraNavegacao.classList.contains('ativo')) {
            barraNavegacao.classList.remove('ativo');
            menuHamburger.classList.remove('ativo');
        }
    });
});

// 
// Formulário de Contato
const formularioContato = document.getElementById('formularioContato');
const mensagemFormulario = document.getElementById('mensagemFormulario');

if (formularioContato) {
    formularioContato.addEventListener('submit', function(e) {
        e.preventDefault();

        // simulacao envio
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        //-----logica para coleta de dados vai aqui----

        mensagemFormulario.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
        formularioContato.reset();
    });
}
