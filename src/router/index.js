import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/MainView.vue'),
    },
    {
      path: '/hub',
      name: 'hub',
      component: () => import('../views/HubView.vue'),
    },
    {
      path: '/wheel',
      name: 'wheel',
      component: () => import('../views/WheelView.vue'),
    },
    {
      path: '/scratch',
      name: 'scratch',
      component: () => import('../views/ScratchView.vue'),
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: () => import('../views/TimelineView.vue'),
    },
    {
      path: '/letter',
      name: 'letter',
      component: () => import('../views/LetterView.vue'),
    },
  ],
})

export default router
