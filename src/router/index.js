import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../presentation/views/HomeView.vue'

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: HomeView }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
