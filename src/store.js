// store.js

import { createStore } from 'vuex';
import { createApp } from 'vue'; // Importez createApp depuis Vue

const app = createApp({}); // Créez une instance de l'application Vue
const store = createStore({
  // Votre configuration de magasin Vuex ici
});

app.use(store); // Utilisez le magasin Vuex dans votre application

// Exportez l'application (si nécessaire)
export default app;
