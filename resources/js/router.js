import { createRouter, createWebHistory } from "vue-router";
import Dashboard from './components/Dashboard.vue';
import Usuarios from './components/Usuarios/Index.vue'
import Cursos from './components/Cursos/Index.vue'
const routes = [

    {
        path: "/",
        component: Dashboard,
    },
    {
        path: "/usuarios",
        name:"usuarios",
        component: Usuarios,
    },
    {
        path: "/cursos",
        name:"cursos",
        component: Cursos,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});