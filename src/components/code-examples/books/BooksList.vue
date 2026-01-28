<template>
  <code-markup
    header="BooksList.vue"
    :code="bookListCode"
    :lineCount="props.lineCount"
    v-bind="codeParam"
  >
    <template #default>
      <books-list-body />
    </template>
  </code-markup>
</template>

<script setup>
  import useLang from '../useLang';
  import BooksListBody from './BooksListBody.vue';
  import { bookListCode } from './BookListCode';

  const props = defineProps({
    lang: {
      type: String,
      default: 'en',
      validator(value) {
        return ['ru', 'en'].includes(value);
      }
    },
    lineCount: {
      default: 'auto'
    }
  });

  const { codeParam } = useLang(props);
</script>

<style lang="scss" scoped>

</style>