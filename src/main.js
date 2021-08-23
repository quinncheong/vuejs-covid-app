import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

const x = 'op';
console.log('whoper');

createApp(App)
	.use(router)
	.mount('#app');
