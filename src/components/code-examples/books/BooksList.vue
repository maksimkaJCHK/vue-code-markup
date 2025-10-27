<template>
  <code-markup
    header="BooksList.vue"
    :code="code"
    :lineCount="props.lineCount"
    v-bind="codeParam"
  >
    <!-- <template #error>
      error
    </template>

    <template #copy>
      copy
    </template>

    <template #success>
      success
    </template> -->

    <template #default>
      <books-list-body />
    </template>
  </code-markup>
</template>

<script setup>
  import useLang from '../useLang';
  import BooksListBody from './BooksListBody.vue';

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

  const code = `<template>
  <div
    id="books-list"
    class="books-list"
  >
    <div
      v-for="book in books"
      :key="book.id"
      class="books-list-item"
    >
      <h3>{{ book.title }}</h3>
      <div class="author">
        {{ book.author }}
      </div>
      <div class="pages">
        {{ book.pages }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  // Пример комментария
  const books = ref([
    {
      id: 1,
      title: "Война и мир",
      author: "Лев Толстой",
      pages: 1274,
      isFinished: true,
      usersReading: [1946, 1293, 7743],
    }, {
      id: 2,
      title: "Записки врача",
      author: "Викентий Вересаев",
      pages: 360,
      isFinished: false,
      usersReading: [1922, 1280, 5378, 9576, 10636],
    },
  ]);
</${'scrip'}t>

<style lang="scss" scoped>
  #books-list {
    margin: 1em 0 2.5em;
  }

  .books-list {
    line-height: 1.2;

    h3 {
      font-size: 1.2em;
      margin: .4em 0 .3em;
    }

    &-item {
      margin: 1.5em 0 ;
    }
  }
</style>`;
</script>

<style lang="scss" scoped>

</style>