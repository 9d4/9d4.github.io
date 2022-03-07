import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./components/App/index.vue"
import { routes } from "./data"

document.addEventListener("DOMContentLoaded", main);

function main() {
    const app = createApp(App)
    const router = createRouter({
        history: createWebHistory("/"),
        routes,
    })

    app.use(router)
    app.mount(createAppDiv())
}

function createAppDiv() {
    // create div#app
    const appEl = document.createElement("div");
    appEl.id = "#app";

    document.body.appendChild(appEl);
    return appEl
}