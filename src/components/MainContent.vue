<template>
  <main>
    <select-lang
      :lang="lang"
      @change-lang="cLang"
    />

    <h1>Vue code markup</h1>

    <template v-if="lang === 'rus'">
      <p>
        Данный плагин создавался для документирования кода. Обычно для этого используется "<a href="https://storybook.js.org/" target="_blank">storybook</a>", но это не подходит для тех случаев, когда человек для которого этот код документируется не является frontend-разработчиком. Он в "storybook" не разберётся. Мне нужно было написать один компонент для "vue.js" и описать как он работает для backend-разработчика, чтобы он мог им пользоваться. По сути это была детальная инструкция по использованию, основам "vue.js", со множеством примеров.
      </p>

      <p>
        Давайте я для начала покажу, что можно делать при помощи моего плагина:
      </p>

      <books-list lang="ru" />

      <p>
        В качестве редактора я использую "Visual Studio Code", мне очень нравится тема "darcula", её я и взял в качестве основной для моего плагина. В будующем я планирую сделать другие темы: "monokai", "gitHub theme" и др. Если у вас стоит задача по документированию кода, то я думаю, что мой плагин вам подойдёт. Есть и другие плагины позволяющие вывести код, но там по сути 2-3 цвета, и они не яркие. С моим плагином, ваша документация станет ярче.
      </p>

      <p>
        Основной упор будет делаться на стилизации vue.js компонентов. Конечно при помощи моего плагина можно будет стилизовать и html-шаблоны, файлы стилей, js код. Но всё таки упор я буду делать на стилизацию vue.js компонентов.
      </p>

      <h2>
        Установка, настройка
      </h2>

      <p>
        Для установки моего плагина необходимо иметь установленный node.js и npm последней версии. В терминале нужно ввести следующую команду:
      </p>

      <instal-code lang="ru" />
    </template>

    <template v-else>
      <p>
        This plugin was created to document the code. Usually "<a href=" is used for this.https://storybook.js.org /" target="_blank">storybook</a>", but this is not suitable for cases where the person for whom this code is being documented is not a frontend developer. He won't understand storybook. I needed to write one component for "vue.js" and describe how it works for the backend developer so that he can use it. In fact, it was a detailed instruction on how to use the basics of "vue.js", with many examples.
      </p>

      <p>
        Let me first show you what you can do with my plugin:
      </p>

      <books-list />

      <p>
        I use Visual Studio Code as an editor, I really like the darcula theme, and I took it as the main one for my plugin. In the future, I plan to make other themes: "monokai", "GitHub theme", etc. If you have the task of documenting the code, then I think my plugin will suit you. There are other plugins that allow you to output the code, but there are essentially 2-3 colors, and they are not bright. With my plugin, your documentation will become brighter.
      </p>

      <p>
        The main focus will be on styling vue.js components. Of course, using my plugin, it will be possible to style html templates, style files, and js code. But still, I will focus on styling vue.js components.
      </p>

      <h2>
        Installation, configuration
      </h2>

      <p>
        To install my plugin, you need to have node installed.js and npm are the latest versions. Enter the following command in the terminal:
      </p>

      <instal-code />
    </template>

    <!-- <tab-books-list lang="ru" />
    <books-line-count lang="ru" />
    <books-style-height lang="ru" /> -->
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  // Пока ExampleContent не нужен
  //import ExampleContent from '@/components/ExampleContent.vue';
  import SelectLang from '@/components/SelectLang.vue';
  import BooksList from '@/components/code-examples/books/BooksList.vue';
  import BooksLineCount from '@/components/code-examples/books/BooksLineCount.vue';
  import BooksStyleHeight from '@/components/code-examples/books/BooksStyleHeight.vue';
  // Пример с табами
  import TabBooksList from '@/components/code-examples/tab/TabBooksList.vue';
  import InstalCode from '@/components/code-examples/doc/InstalCode.vue';

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
      margin: .5em 0 .7em;
    }

    h2 {
      font-size: 1.3em;
      line-height: 1.2;
      margin: 1em 0 .5em;
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
