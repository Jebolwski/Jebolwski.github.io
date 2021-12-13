import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import MainPage from "../views/MainPage.vue";
import Posts from "../views/Posts.vue";
import Profile from "../views/Profile.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/users/:id",
        name: "MainPage",
        component: MainPage,
    },
    {
        path: "/users/:id/posts",
        name: "Posts",
        component: Posts,
    },
    {
        path: "/users/:id/profile",
        name: "Profile",
        component: Profile,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;