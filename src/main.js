// main.js

import { createApp } from 'vue'; // Importez createApp depuis Vue
import App from './App.vue';
import store from './store';
import axios from 'axios';

const app = createApp(App); // Créez une instance de l'application Vue

app.use(store); // Utilisez le magasin Vuex dans votre application

axios.defaults.baseURL = 'https://api.sofascore.com/api/v1/';

app.mount('#app'); // Montez votre application Vue sur l'élément avec l'ID 'app'
