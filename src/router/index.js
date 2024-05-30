import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import ArtistList from '../views/Artists.vue';
import LyricsList from '../views/Lyrics.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/artists',
    name: 'ArtistList',
    component: ArtistList
  },
  {
    path: '/lyrics',
    name: 'LyricsList',
    component: LyricsList
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
