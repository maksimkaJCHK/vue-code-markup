<template>
  <div class="settings-doc">
    <template v-if="props.isRus">
      <h2>
        Пример настройки
      </h2>

      <div class="settings-doc-cont">
        <div class="settings-doc-col settings-doc-code">
          <code-markup
            :header="header"
            :is-header="isHeader"
            :is-count="isCount"
            :line-count="lineCount"
          >
            <books-list-body />
          </code-markup>
        </div>
        <div class="settings-doc-col settings-doc-content">
          <div class="settings-doc-row">
            <p v-if="props.isRus">
              <strong>isHeader</strong> - данный параметр отвечает за отображение заголовка окна с кодом. Если вы собираетесь отображать заголовок, то данный параметр можно не задавать, он по умолчанию равен "true".
            </p>

            <ui-checkbox
              v-model="isHeader"
              value="isHeader"
            >
              {{ isHeader }}
            </ui-checkbox>
          </div>
          <div class="settings-doc-row">
            <p v-if="props.isRus">
              <strong>header</strong> - заголовок окна с кодом. По умолчанию не имеет значения. Для примера я задал значение "BooksList.vue".
            </p>

            <ui-input v-model="header" />
          </div>
          <div class="settings-doc-row">
            <p v-if="props.isRus">
              <strong>isCount</strong> - данный параметр отвечает за отображение номера строки. Если его не задать, то строки будут пронумерованы, по умолчанию равен "true".
            </p>

            <ui-checkbox
              v-model="isCount"
              value="isCount"
            >
              {{ isCount }}
            </ui-checkbox>
          </div>
          <div class="settings-doc-row">
            <p>
              <strong>lineCount</strong> - данный параметр отвечает за то, сколько строк отображать. В него нужно передавать числа, если нужно отобразить все строки, то нужно задать значение "auto". По умолчанию хадано значение "auto".
            </p>
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
  import { ref } from 'vue';

  import BooksListBody from '@/components/code-examples/books/BooksListBody.vue';
  import UiInput from '@/UI/UIInput.vue';
  import UiCheckbox from '@/UI/UICheckbox.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });

  const header = ref('BooksList.vue');
  const isHeader = ref(true);
  const isCount = ref(true);
  const lineCount = ref(20);
</script>

<style lang="scss" scoped>
  .settings-doc {
    &-cont {
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

    &-content {
      p {
        margin: .5em 0;

        &:first-of-type {
          margin-top: 0;
        }
      }
    }

    &-row {
      margin: 1em 0;

      &:first-of-type {
        margin-top: 0;
      }
    }

    &-code {
      overflow: hidden;
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