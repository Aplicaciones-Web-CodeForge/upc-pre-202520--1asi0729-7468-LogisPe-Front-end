import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('../views/Login.vue')
const Register = () => import('../views/Register.vue')
const MainLayout = () => import('../layouts/MainLayout.vue')
const HomeView = () => import('../presentation/views/HomeView.vue')
const ManageStore = () => import('../components/manage-store.vue')
const StockView = () => import('../presentation/views/StockView.vue')
const OrdersView = () => import('../presentation/views/OrdersView.vue')
const SuppliersView = () => import('../presentation/views/SuppliersView.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    {
      path: '/home',
      component: MainLayout,
      children: [
        { path: '', name: 'home', component: HomeView },
        { path: 'recipes', name: 'recipes', component: ManageStore },
        { path: 'stock', name: 'stock', component: StockView },
        { path: 'orders', name: 'orders', component: OrdersView },
        { path: 'suppliers', name: 'suppliers', component: SuppliersView },
      ]
    }
  ]
})

// Protección de rutas: requiere sesión para /home y sus hijos
router.beforeEach((to) => {
  const publicRoutes = ['login', 'register']
  const isPublic = publicRoutes.includes(to.name)
  const hasSession = !!localStorage.getItem('user')

  if (!isPublic && !hasSession) {
    return { name: 'login' }
  }
  if (isPublic && hasSession && to.name === 'login') {
    return { name: 'home' }
  }
})

export default router
