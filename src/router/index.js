import { createRouter, createWebHistory } from "vue-router";
const routes = [{
        path: "/",
        redirect: "/install",
    },
    {
        path: "/home",
        name: "home",
        component: () =>
            import ("@/views/home.vue"),
        meta: {
            title: "输入框",
        },
        children: [{
            path: "/install",
            name: "install",
            component: () =>
                import ("@/views/install.vue"),
            meta: {
                title: "输入框",
            },
        }, {
            path: "/input",
            name: "input",
            component: () =>
                import ("@/views/input/index.vue"),
            meta: {
                title: "输入框",
            },
        }]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 导航守卫
router.beforeEach((to, from, next) => {
    if (to.path !== "/favicon.icon") {
        document.title = to.meta.title ? (to.meta.title) : "";
        next();
    }
});

export default router;