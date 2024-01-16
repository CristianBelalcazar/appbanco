import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/InicioView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/registrar',
      name: 'registrarse',
      component: () => import('../views/RegistrarView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/cliente',
      name: 'cliente',
      component: () => import('../views/ClienteView.vue')
    },
    {
      path: '/formulario',
      name: 'formulario-solicitud',
      component: () => import('../views/FormularioSolicitudView.vue')
    },
    {
      path: '/asesor',
      name: 'asesor',
      component: () => import('../views/AsesorView.vue')
    },
    {
      path: '/gerente',
      name: 'gerente',
      component: () => import('../views/GerenteView.vue')
    },
    {
      path: '/admin',
      name: 'administrador',
      component: () => import('../views/AdminView.vue')
    }
  ]
})

export default router
