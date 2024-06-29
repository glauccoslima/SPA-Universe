// index.js: Ponto de entrada da SPA que configura o roteador e os controles de evento
import { Router } from './router.js';
import { registerControls } from './events.js';

const router = new Router();

// Configuração das rotas da aplicação
router.add("/", "/pages/home.html");
router.add("/universo", "/pages/universo.html");
router.add("/exploracao", "/pages/exploracao.html");
router.add(404, "/pages/404.html");

// Inicializa o roteador e registra os controles de evento
router.handle();
registerControls();

// Define manipuladores para o evento de mudança de estado do histórico
window.onpopstate = () => router.handle();
window.route = () => router.route();
