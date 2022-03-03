import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../pages/NotFound.vue'

const routes = [
  {
    path: '/',
    component: () => import('../layouts/DashboardLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Board View',
        component: () => import('../pages/Home.vue')
      },
      {
        path: '/',
        name: 'Workspaces',
        component: () => import('../pages/Workspaces.vue')
      },
      {
        path: '/',
        name: 'Members',
        component: () => import('../pages/Members.vue')
      },
      {
        path: '/',
        name: 'Timelogs',
        component: () => import('../pages/Timelogs.vue')
      },
      {
        path: '/',
        name: 'Settings',
        component: () => import('../pages/Settings.vue')
      },
      {
        path: '/',
        name: 'Notifications',
        component: () => import('../pages/Notifications.vue')
      },
      {
        path: '/',
        name: 'Messages',
        component: () => import('../pages/Messages.vue')
      },

    ]
  },
  // {
  //   path: '/',
  //   name: 'Board View',
  //   component: () => import('../pages/BoardView.vue')
  // },
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

export default router