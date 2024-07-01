// router.js: Classe Router para gerenciar as rotas de uma aplicação de página única (SPA)
export class Router {
    routes = {}; // Armazena as correspondências entre URLs e o conteúdo da página

    /**
     * Adiciona uma nova rota ao mapa de rotas.
     * @param {string} routeName - A URL da rota.
     * @param {string} page - O caminho do arquivo HTML que deve ser carregado para essa rota.
     */
    add(routeName, page) {
        this.routes[routeName] = page;
    }

    /**
     * Manipula as mudanças de rota e atualiza o histórico do navegador.
     * @param {Event} event - O evento de clique que aciona a mudança de rota.
     */
    route(event) {
        if (event) {
            event.preventDefault(); // Previne o comportamento padrão de navegação direta.
            window.history.pushState({}, "", event.target.href); // Atualiza a URL sem recarregar a página.
        }
        this.handle();
    }

    /**
     * Carrega a página correspondente à rota atual do navegador.
     * Seleciona o conteúdo com base na URL atual ou redireciona para uma página de erro.
     */
    handle() {
        const { pathname } = window.location;
        const route = this.routes[pathname] || this.routes[404]; // Seleciona a rota ou a página de erro.
        fetch(route)
            .then(data => data.text()) // Converte a resposta do fetch em texto HTML.
            .then(html => {
                document.querySelector("#mainContent").innerHTML = html; // Insere o HTML no elemento principal.
                document.dispatchEvent(new Event('pageLoaded')); // Dispara um evento indicando que a página foi carregada.
            })
            .catch(error => {
                console.error('Error loading the page:', error); // Registra erros de carregamento.
                this.redirectToDefaultRoute(); // Redireciona para a rota padrão em caso de erro.
            });
    }

    /**
     * Redireciona para a rota padrão definida em caso de uma rota inexistente ou erro.
     * Utilizada para manter a navegação funcional mesmo quando ocorrem falhas.
     */
    redirectToDefaultRoute() {
        const defaultRoute = this.routes[404];
        window.history.pushState({}, "", defaultRoute); // Atualiza a URL para a página de erro.
        this.handle(); // Tenta carregar novamente a página de erro.
    }
}
