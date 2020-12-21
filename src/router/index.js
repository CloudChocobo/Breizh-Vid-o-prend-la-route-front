import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/Accueil.vue";
import Evenements from "../views/Evenements.vue";
import Films from "../views/Films.vue";
import Villages from "../views/Villages.vue";
import Error404 from "../views/404.vue";


const routes = [{
        path: "/",
        name: "accueil",
        component: Accueil,
        meta: {
            title: "BreizhVideo - Accueil",
        },
    },
    {
        path: "/evenements",
        name: "Evenements",
        component: Evenements,
        meta: {
            title: "BreizhVideo - Evenements",
        },
    },
    {
        path: "/films",
        name: "Films",
        component: Films,
        meta: {
            title: "BreizhVideo - Films",
        },
    },
    {
        path: "/villages",
        name: "Villages",
        component: Villages,
        meta: {
            title: "BreizhVideo - Villages",
        },
    },
    {
        path: "/:catchAll(.*)",
        component: Error404,
        meta: {
            title: "BreizhVideo - 404",
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;