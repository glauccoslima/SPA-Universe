// router.js: Classe Router para gerenciar as rotas da SPA
export class Router {
    routes = {}; // Mapa que guarda as correspondências entre caminhos e páginas

    // Adiciona uma nova rota ao mapa de rotas
    add(routeName, page) {
        this.routes[routeName] = page;
    }

    // Manipulador de evento de clique que atualiza a URL sem recarregar a página
    route(event) {
        event = event || window.event;
        event.preventDefault(); // Evita o comportamento padrão do link
        window.history.pushState({}, "", event.currentTarget.href);
        this.handle();
    }

    // Carrega o conteúdo da rota especificada e atualiza o DOM
    handle() {
        const { pathname } = window.location;
        const route = this.routes[pathname] || this.routes[404];
        fetch(route)
            .then(data => data.text())
            .then(html => {
                document.querySelector("#mainContent").innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading the page:', error);
                this.redirectToDefaultRoute();
            });
    }

    // Redireciona para a rota padrão definida em caso de erro
    redirectToDefaultRoute() {
        const defaultRoute = this.routes[404];
        window.history.pushState({}, "", defaultRoute);
        fetch(defaultRoute)
            .then(data => data.text())
            .then(html => {
                document.querySelector("#mainContent").innerHTML = html;
            });
    }

    // Método para navegar programaticamente para uma nova rota
    navigate(path) {
        window.history.pushState({}, "", path);
        this.handle();
    }
}