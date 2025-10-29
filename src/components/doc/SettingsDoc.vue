<template>
  <div class="settings-doc">
    <template v-if="props.isRus">
      <h2>
        Пример настройки
      </h2>

      <div class="settings-doc-row">
        <div class="settings-doc-col settings-doc-code">
          <code-markup>
            <books-list-body />
          </code-markup>
        </div>
        <div class="settings-doc-col settings-doc-content">
          <div class="settings-doc-row">
            <strong>header</strong>
          </div>
          <div class="settings-doc-row">
            <strong>isHeader</strong>
          </div>
          <div class="settings-doc-row">
            <strong>isCount</strong>
          </div>
          <div class="settings-doc-row">
            <strong>lineCount</strong>
          </div>
          <div class="settings-doc-row">
            <strong>textBold</strong>
          </div>
          <div class="settings-doc-row">
            <strong>headerBold</strong>
          </div>
          <div class="settings-doc-row">
            <strong>code</strong>
          </div>
          <div class="settings-doc-row">
            <strong>title</strong>
          </div>
          <div class="settings-doc-row">
            <strong>successfulText</strong>
          </div>
          <div class="settings-doc-row">
            <strong>errorText</strong>
          </div>
        </div>
      </div>
    </template>

    <template v-if="!props.isRus">
      <h2>
        Configuration example
      </h2>
    </template>
  </div>
</template>

<script setup>
  import BooksListBody from '@/components/code-examples/books/BooksListBody.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });
</script>

<style lang="scss" scoped>
  .settings-doc {
    &-row {
      display: grid;
      gap: 10px 20px;;
      grid-template-columns: 1fr 1fr;

      @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
      }
    }
    
    &-col {
      .code-markup {
        margin: 0;
      }
    }

    @media screen and (max-width: 700px) {
      &-code {
        grid-row-start: 2;
      }

      &-content {
        grid-row-start: 1;
      }
    }
  }
</style>