// events.js: Configura eventos de clique para navegação em uma SPA (Single Page Application).

import * as elements from './elements.js';  // Importa referências dos elementos DOM utilizados nos eventos.

export function registerControls() {
    // Registra eventos após o carregamento completo do DOM para garantir que os elementos estejam acessíveis.
    document.addEventListener('DOMContentLoaded', () => {

        // Função para limpar todos os estados de seleção e remover classes específicas.
        function clearSelections() {
            elements.home.classList.remove('select');
            elements.universe.classList.remove('select');
            elements.exploration.classList.remove('select');
            // Remove classes adicionais de estilização conforme o contexto.
            elements.body.classList.remove('universe', 'exploration');
        }

        // Registra evento de clique para o elemento 'home'.
        if (elements.home) {
            elements.home.addEventListener('click', () => {
                clearSelections();  // Limpa seleções atuais antes de mudar o estado.
                elements.home.classList.add('select');  // Marca o elemento 'home' como selecionado.
                elements.body.classList.add('home'); // Adiciona a classe 'home' ao corpo para estilização específica.
            });
        }

        // Semelhante ao 'home', registra eventos de clique para os elementos 'universe' e 'exploration'.
        if (elements.universe) {
            elements.universe.addEventListener('click', () => {
                clearSelections();
                elements.universe.classList.add('select');
                elements.body.classList.add('universe'); // Adiciona a classe 'universe' ao corpo para estilização específica.
            });
        }

        if (elements.exploration) {
            elements.exploration.addEventListener('click', () => {
                clearSelections();
                elements.exploration.classList.add('select');
                elements.body.classList.add('exploration'); // Adiciona a classe 'exploration' ao corpo para estilização específica.
            });
        }

        // Gerencia cliques no botão 'moreInfoBtn', realçando 'universe' ao ser pressionado.
        if (elements.moreInfoBtn) {
            elements.moreInfoBtn.addEventListener('click', () => {
                clearSelections();
                elements.universe.classList.add('select');  // Assume que 'universe' precisa ser destacado.
                elements.body.classList.add('universe'); // Adiciona a classe 'universe' ao corpo para estilização específica.
            });
        }
    });
}