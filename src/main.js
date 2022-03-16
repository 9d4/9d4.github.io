import { createApp, ref } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./components/App/index.vue"
import { routes } from "./data"

document.addEventListener("DOMContentLoaded", main);

export const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

function main() {
    const app = createApp(App)

    app.use(router)

    router.isReady().then(() => {
        app.mount(createAppDiv())
    });
}

function createAppDiv() {
    // create div#app
    const appEl = document.createElement("div");
    appEl.id = "#app";

    document.body.appendChild(appEl);
    return appEl
}