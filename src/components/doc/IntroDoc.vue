<template>
  <div class="intro-doc">
    <template v-if="props.isRus">
      <p>
        Данный плагин создавался для документирования кода. Обычно для этого используется "<a href="https://storybook.js.org/" target="_blank">storybook</a>", но это не подходит для тех случаев, когда человек для которого этот код документируется не является frontend-разработчиком. Он в "storybook" не разберётся. Мне нужно было написать один компонент для "vue.js" и описать как он работает для backend разработчика, чтобы он мог им пользоваться. По сути это была детальная инструкция по использованию, основам "vue.js", со множеством примеров.
      </p>

      <p>
        Давайте для начала я покажу, что можно делать при помощи моего плагина:
      </p>

      <books-list
        lang="ru"
        :line-count="lineCount"
      />

      <p>
        В качестве редактора я использую "Visual Studio Code", мне очень нравится тема "darcula", её я и взял в качестве основной для моего плагина. В будующем я планирую сделать другие темы: "monokai", "gitHub theme" и др. Если у вас стоит задача по документированию кода, то я думаю, что мой плагин вам подойдёт. Есть и другие плагины позволяющие вывести код, но там по сути 2-3 цвета, и они не яркие. С моим плагином, ваша документация станет ярче.
      </p>

      <p>
        Основной упор будет делаться на написание документации для vue.js компонентов.
      </p>
    </template>

    <template v-if="!props.isRus">
      <p>
        This plugin was created to document the code. Usually "<a href=" is used for this.https://storybook.js.org /" target="_blank">storybook</a>", but this is not suitable for cases where the person for whom this code is being documented is not a frontend developer. He won't understand storybook. I needed to write one component for "vue.js" and describe how it works for the backend developer so that he can use it. In fact, it was a detailed instruction on how to use the basics of "vue.js", with many examples.
      </p>

      <p>
        First, let me show you what you can do with my plugin:
      </p>

      <books-list :line-count="lineCount" />

      <p>
        I use Visual Studio Code as an editor, I really like the darcula theme, and I took it as the main one for my plugin. In the future, I plan to make other themes: "monokai", "GitHub theme", etc. If you have the task of documenting the code, then I think my plugin will suit you. There are other plugins that allow you to output code, but there are essentially 2-3 colors, and they are not bright. With my plugin, your documentation will become brighter.
      </p>

      <p>
        The main focus will be on writing documentation for vue.js components.
      </p>
    </template>
  </div>
</template>

<script setup>
  import BooksList from '@/components/code-examples/books/BooksList.vue';

  const lineCount = 15;

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });
</script>

<style lang="scss" scoped>

</style>