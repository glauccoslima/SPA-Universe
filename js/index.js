// Importa o módulo de roteamento e o módulo de controle de eventos.
import { Router } from './router.js';
import { registerControls } from './events.js';

// Cria uma instância do Router, responsável por gerenciar as rotas da aplicação.
const router = new Router();

// Configura as rotas da aplicação associando caminhos a arquivos HTML específicos.
router.add("/", "/pages/home.html");
router.add("/universo", "/pages/universo.html");
router.add("/exploracao", "/pages/exploracao.html");
router.add(404, "/pages/404.html");

// Adiciona um ouvinte para o evento 'DOMContentLoaded', que é disparado quando o documento HTML inicial é completamente carregado.
document.addEventListener('DOMContentLoaded', () => {
    // Lida com a rota inicial ao carregar a página, garantindo que o conteúdo correto seja mostrado.
    router.handle();
    // Registra os controles de eventos (como cliques de botão, entradas de formulário, etc.) definidos no módulo 'events.js'.
    registerControls();
});

// Adiciona um ouvinte para um evento personalizado 'pageLoaded', que deve ser disparado após o carregamento de uma nova página via AJAX.
document.addEventListener('pageLoaded', () => {
    // Seleciona o botão de mais informações para adicionar interatividade específica.
    const moreInfoButton = document.getElementById('moreInfoButton');
    if (moreInfoButton) {
        // Adiciona um ouvinte de clique que manipula o histórico do navegador e a exibição de conteúdo.
        moreInfoButton.addEventListener('click', () => {
            // Altera o estado do histórico para a rota '/universo' e trata a navegação.
            window.history.pushState({}, '', '/universo');
            // Atualiza a visualização com base na nova rota.
            router.handle();
        });
    }
});

// Adiciona um ouvinte para o evento 'onpopstate' que é disparado quando o estado ativo da história do navegador muda (como voltar ou avançar).
window.onpopstate = () => {
    // Lida com a alteração da rota quando o usuário navega pelo histórico do navegador.
    router.handle();
};
