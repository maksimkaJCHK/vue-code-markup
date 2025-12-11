<template>
  <div class="slots-doc">
    <template v-if="props.isRus">
      <h2>Примеры</h2>

      <p>
        Я думаю, что нужно более подробно показать, что можно сделать при помощи моего плагина. Ниже я покажу примеры использования и ссылки на примеры.
      </p>

      <p>
        Пример <a href="https://github.com/maksimkaJCHK/vue-code-markup/blob/main/src/components/code-examples/tab/TabBooksList.vue" target="_blank">создания табов</a>.
      </p>

      <tab-books-list lang="ru" />

      <p>Выше я писал про входной параметр "lineCount", если это возможно, я бы вам советовал задавать максимальную высоту через этот входной параметр. Однако это не всегда возможно. Я допускаю ситуацию, при которой у вас по дизайну задана какая-то конкретная максимальная высота. </p>

      <books-style-height />
    </template>

    <template v-if="!props.isRus">
      <h2>Examples</h2>

      <tab-books-list />
    </template>
  </div>
</template>

<script setup>
  import BooksLineCount from '@/components/code-examples/books/BooksLineCount.vue';
  import BooksStyleHeight from '@/components/code-examples/books/BooksStyleHeight.vue';
  // Пример с табами
  import TabBooksList from '@/components/code-examples/tab/TabBooksList.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });

</script>

<style lang="scss">

</style>