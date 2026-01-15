import { createApp } from 'vue';
import './styles/style.scss';
import App from './App.vue';
import CodeMarkup from './code-markup/';

const app = createApp(App);

app.use(CodeMarkup);
app.mount('#app');
