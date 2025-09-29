<template>
  <main>
    <h1>Vue code markup</h1>

    <select-lang
      :lang="lang"
      @change-lang="cLang"
    />

    <books-list />
    <tab-books-list />
    <books-line-count />
    <books-style-height />
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  // Пока ExampleContent не нужен
  //import ExampleContent from '@/components/ExampleContent.vue';
  import SelectLang from '@/components/SelectLang.vue';
  import BooksList from '@/components/code-examples/BooksList.vue';
  import TabBooksList from '@/components/code-examples/tab/TabBooksList.vue';
  import BooksLineCount from '@/components/code-examples/BooksLineCount.vue';
  import BooksStyleHeight from '@/components/code-examples/BooksStyleHeight.vue';

  const lang = ref('rus');
  const cLang = (v) => lang.value = v;
</script>

<style lang="scss">
  main {
    h1 {
      font-size: 1.5em;
      line-height: 1.2;
      margin: 0 0 1em;
    }

    h2 {
      font-size: 1.3em;
      line-height: 1.2;
      margin: 1em 0;
    }

    p {
      line-height: 1.4;
      margin: 1em 0;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;

      &:hover {
        color: #535bf2;
      }
    }

    .code-markup {
      margin: 1em 0;
    }
  }
</style>
