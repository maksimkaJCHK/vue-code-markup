<template>
  <main>
    <select-lang
      :lang="lang"
      @change-lang="cLang"
    />

    <h1>Vue code markup</h1>

    <template v-if="lang === 'rus'">
      <p>
        Данный плагин создавался для документирования кода. Обычно для этого используется "<a href="https://storybook.js.org/" target="_blank">storybook</a>", но это не подходит для тех случаев, когда человек для которого ты этот код документируешь не frontend-разработчик. Он в "storybook" не разберётся. Мне нужно было написать один компонент для "vue.js" и написать документацию для backend-разработчика, чтобы он мог им пользоваться. По сути это была детальная инструкция по использованию, основам "vue.js", со множеством примеров.
      </p>
    </template>

    <template v-else>
      <p>
        This plugin was created to document the code. Usually "<a href=" is used for this.https://storybook.js.org /" target="_blank">storybook</a>", but this is not suitable for cases where the person for whom you are documenting this code is not a frontend developer. He won't understand storybook. I needed to write one component for "vue.js" and write documentation for the backend developer so that he can use it. In fact, it was a detailed instruction on how to use the basics of "vue.js", with many examples.
      </p>
    </template>

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
      margin: .5em 0 1em;
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
      color: var(--link-color);
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
