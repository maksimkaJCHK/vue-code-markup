<template>
  <code-markup
    header="main.js"
    :code="code"
    v-bind="codeParam"
  >
    <code-line>
      <mu-key-words code="import" />
      <mu-type code=" { createApp } " />
      <mu-key-words code="from" />
      <mu-text code=" 'vue'" />
      <mu-type code=";" />
    </code-line>

    <code-line>
      <mu-key-words code="import" />
      <mu-type code=" App " />
      <mu-key-words code="from" />
      <mu-text code=" './App.vue'" />
      <mu-type code=";" />
    </code-line>

    <code-line new active>
      <mu-key-words code="import" />
      <mu-type code=" CodeMarkup " />
      <mu-key-words code="from" />
      <mu-text code=" 'vue-code-markup'" />
      <mu-type code=";" />
    </code-line>

    <code-line new active>
      <mu-key-words code="import" />
      <mu-text code=" 'vue-code-markup/lib/style.css'" />
      <mu-type code=";" />
    </code-line>

    <code-line />

    <code-line>
      <mu-key-words code="const" />
      <mu-variable code=" app" />
      <mu-type code=" = " />
      <mu-function code="createApp(" />
      <mu-type code="App" />
      <mu-function code=")" />
      <mu-type code=";" />
    </code-line>

    <code-line new active>
      <mu-type code="app." />
      <mu-function code="use(" />
      <mu-type code="CodeMarkup" />
      <mu-function code=")" />
      <mu-type code=";" />
    </code-line>

    <code-line>
      <mu-type code="app." />
      <mu-function code="mount(" />
      <mu-text code="'#app'" />
      <mu-function code=")" />
      <mu-type code=";" />
    </code-line>
  </code-markup>
</template>

<script setup>
  import useLang from '../useLang';

  const props = defineProps({
    lang: {
      type: String,
      default: 'en',
      validator(value) {
        return ['ru', 'en'].includes(value);
      }
    }
  });

  const { codeParam } = useLang(props);

  const code = `import { createApp } from 'vue';
import 'vue-code-markup/lib/style.scss';
import App from './App.vue';
import CodeMarkup from 'vue-code-markup';

const app = createApp(App);

app.use(CodeMarkup);
app.mount('#app');`;
</script>

<style lang="scss" scoped>

</style>