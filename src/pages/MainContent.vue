<template>
  <main>
    <select-lang
      :lang="lang"
      @change-lang="cLang"
    />

    <h1>Vue code markup</h1>

    <template v-if="lang === 'rus'">
      <intro-doc is-rus />
      <install-doc is-rus />
      <main-comp-doc is-rus />
      <code-markup-doc is-rus />
      <code-line-doc is-rus />
    </template>

    <template v-else>
      <intro-doc />
      <install-doc />
      <main-comp-doc />
      <code-markup-doc />
      <code-line-doc />
    </template>

    <!-- <tab-books-list lang="ru" />
    <books-line-count lang="ru" />
    <books-style-height lang="ru" /> -->
  </main>
</template>

<script setup>
  import { ref, onBeforeMount } from 'vue';
  // Пока ExampleContent не нужен
  //import ExampleContent from '@/components/ExampleContent.vue';
  import SelectLang from '@/components/SelectLang.vue';
  import IntroDoc from '@/components/doc/IntroDoc.vue';
  import InstallDoc from '@/components/doc/InstallDoc.vue';
  import MainCompDoc from '@/components/doc/MainCompDoc.vue';
  import CodeMarkupDoc from '@/components/doc/CodeMarkupDoc.vue';
  import CodeLineDoc from '@/components/doc/CodeLineDoc.vue';

  import BooksLineCount from '@/components/code-examples/books/BooksLineCount.vue';
  import BooksStyleHeight from '@/components/code-examples/books/BooksStyleHeight.vue';
  // Пример с табами
  import TabBooksList from '@/components/code-examples/tab/TabBooksList.vue';

  const lang = ref('rus');

  const cLang = (v) => {
    lang.value = v;

    window.location.hash = (v === 'rus') ? v : '';
  }

  const identLang = () => lang.value = (window.location.hash === '#rus') ? 'rus' : 'eng';

  onBeforeMount(identLang);
</script>

<style lang="scss">
  main {
    @media screen and (max-width: 700px) {
      font-size: .9em;
    }

    @media screen and (max-width: 500px) {
      font-size: .8em;
    }

    @media screen and (max-width: 400px) {
      font-size: .75em;
    }

    h1 {
      font-size: 1.5em;
      line-height: 1.2;
      margin: .5em 0 .7em;
    }

    h2 {
      font-size: 1.3em;
      line-height: 1.2;
      margin: 1.3em 0 .5em;
    }

    p {
      line-height: 1.4;
      margin: .5em 0 1em;
    }

    a {
      color: var(--link-color);
      text-decoration: underline;

      &:hover {
        color: var(--link-hover-color);
        text-decoration: none;
      }
    }

    .code-markup {
      margin: 1em 0;
    }
  }
</style>
