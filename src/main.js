import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import CodeMarkup from './code-markup/';

const app = createApp(App);

app.use(CodeMarkup);
app.mount('#app');
