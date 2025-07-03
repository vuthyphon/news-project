import { createRouter, createWebHistory } from 'vue-router'
import DetailPage from '../pages/posts/PostDetail.vue'
import HomePage from '../pages/home/HomePage.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/detail', component: DetailPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
