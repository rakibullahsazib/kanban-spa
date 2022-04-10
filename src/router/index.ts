import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../pages/NotFound.vue'
import { useRootStore } from '../store/rootStore'
import { useUserStore } from '../store/userStore'


const routes = [
  {
    path: '/account',
    component: () => import('../layouts/AccountLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('../pages/account/Login.vue')
      },
      {
        path: 'create',
        name: 'Create Account',
        component: () => import('../pages/account/CreateAccount.vue')
      },
      {
        path: 'forgot-password',
        name: 'Forgot Password',
        component: () => import('../pages/account/ForgotPassword.vue')
      },
    ]
  },
  {
    path: '/',
    component: () => import('../layouts/DashboardLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue')
      },
      {
        path: '/workspaces',
        name: 'Workspaces',
        component: () => import('../pages/Workspaces.vue')
      },
      {
        path: '/members',
        name: 'Members',
        component: () => import('../pages/Members.vue')
      },
      {
        path: '/time-logs',
        name: 'Timelogs',
        component: () => import('../pages/Timelogs.vue')
      },
      {
        path: '/settings',
        name: 'Settings',
        component: () => import('../pages/Settings.vue')
      },
      {
        path: '/notifications',
        name: 'Notifications',
        component: () => import('../pages/Notifications.vue')
      },
      {
        path: '/messages',
        name: 'Messages',
        component: () => import('../pages/Messages.vue')
      },

    ]
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
    name: 'NotFound'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  const rootStore = useRootStore()
  rootStore.previousRoutePath = from.path?.toString() || ''
  // route navigation based on authentication is being managed by firebase auth state change
  // Set document title
  let title = import.meta.env.VITE_APP_TITLE?.toString()
  title += ' | ' + to.name?.toString()
  document.title = title || 'Kanban'

  console.log(to.meta)
  // if (to.meta.requiresAuth) {
  //   return {name: 'Login'}
  // }
})

export { routes }
export default router