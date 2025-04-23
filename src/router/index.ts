import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import ListingView from '@/views/ListingView.vue'
import OverView from '@/views/OverView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactView,
    },
    {
      path: '/listing',
      name: 'listing',
      component: ListingView,
    },
    {
      path: '/items',
      name: 'item',
      component: OverView,
    },
  ],
})

export default router
