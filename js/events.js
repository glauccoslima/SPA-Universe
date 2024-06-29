// events.js: Configura os eventos de clique para controle da navegação na SPA
import * as elements from './elements.js';

export function registerControls() {
    elements.home.addEventListener('click', () => {
        // Limpa as classes ativas e aplica ao elemento clicado
        elements.exploration.classList.remove('select');
        elements.universe.classList.remove('select');
        elements.body.classList.remove('universe', 'exploration');
        elements.home.classList.add('select');
    });

    elements.universe.addEventListener('click', () => {
        // Muda a classe ativa para 'universe', ajustando o tema da página
        elements.home.classList.remove('select');
        elements.exploration.classList.remove('select');
        elements.body.classList.remove('exploration');
        elements.body.classList.add('universe');
        elements.universe.classList.add('select');
    });

    elements.exploration.addEventListener('click', () => {
        // Muda a classe ativa para 'exploration', ajustando o tema da página
        elements.home.classList.remove('select');
        elements.universe.classList.remove('select');
        elements.body.classList.remove('universe');
        elements.body.classList.add('exploration');
        elements.exploration.classList.add('select');
    });
}
