// events.js: Configura os eventos de clique para controle da navegação na SPA
import * as elements from './elements.js';

export function registerControls() {
    // Verifica se o elemento 'home' existe antes de adicionar o evento de clique
    if (elements.home) {
        elements.home.addEventListener('click', () => {
            elements.exploration.classList.remove('select');
            elements.universe.classList.remove('select');
            elements.body.classList.remove('universe', 'exploration');
            elements.home.classList.add('select');
        });
    }

    // Verifica se o elemento 'universe' existe antes de adicionar o evento de clique
    if (elements.universe) {
        elements.universe.addEventListener('click', () => {
            elements.home.classList.remove('select');
            elements.exploration.classList.remove('select');
            elements.body.classList.remove('exploration');
            elements.body.classList.add('universe');
            elements.universe.classList.add('select');
        });
    }

    // Verifica se o elemento 'exploration' existe antes de adicionar o evento de clique
    if (elements.exploration) {
        elements.exploration.addEventListener('click', () => {
            elements.home.classList.remove('select');
            elements.universe.classList.remove('select');
            elements.body.classList.remove('universe');
            elements.body.classList.add('exploration');
            elements.exploration.classList.add('select');
        });
    }

    // Verifica se o botão 'moreInfoBtn' existe antes de adicionar o evento de clique
    if (elements.moreInfoBtn) {
        elements.moreInfoBtn.addEventListener('click', () => {
            console.log('Botão mais informações clicado!');
        });
    }
}

