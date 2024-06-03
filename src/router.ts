import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/layouts/DefaultLayout.vue'),
        children: [
            {
                path: '/',
                component: () => import('@/views/HomeView.vue')
            }
        ]
    }
]

if (import.meta.env.DEV) {
    routes[0].children?.push({
        path: '/styleguide',
        component: () => import('@/views/StyleguideView.vue')
    })
}

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;