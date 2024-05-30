import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

const app = createApp(App);
app.use(router);
app.use(VueAwesomeSwiper);
app.mount('#app');
