<template>
  <div class="settings-doc">
    <template v-if="props.isRus">
      <h2>
        Компонент code-markup
      </h2>

      <p>
        Это самый главный компонент, он служит обёрткой для всех остальных компонентов. Если вы не хотите делать полную установку, то подключить его можно следующим способом:
      </p>

      <code-marcup-example lang="ru" />

      <p>
        Данный компонент имеет следующие входные параметры:
      </p>
    </template>

    <template v-if="!props.isRus">
      <h2>
        The code-markup component
      </h2>

      <p>
        This is the most important component, it serves as a wrapper for all other components. If you do not want to do a full installation, then you can connect it in the following way:
      </p>

      <code-marcup-example />

      <p>
        This component has the following input parameters:
      </p>
    </template>

    <div class="settings-doc-cont">
      <div class="settings-doc-col settings-doc-code">
        <code-markup
          :header="header"
          :is-header="isHeader"
          :is-count="isCount"
          :line-count="lineCount"
          :text-bold="textBold"
          :header-bold="headerBold"
          :title="title"
          :successful-text="successfulText"
          :error-text="errorText"
          :code="bookListCode"
        >
          <books-list-body />
        </code-markup>
      </div>
      <div class="settings-doc-col settings-doc-content">
        <div class="settings-doc-row">
          <p v-if="props.isRus">
            <strong>isHeader</strong> - данный параметр отвечает за отображение заголовка окна с кодом. Если вы собираетесь отображать заголовок, то данный параметр можно не задавать, он по умолчанию равен "true".
          </p>

          <p v-if="!props.isRus">
            <strong>isHeader</strong> - this parameter is responsible for displaying the title of the window with the code. If you are going to display the title, then you do not need to set this parameter, it is set to "true" by default.
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

          <p v-if="!props.isRus">
            <strong>header</strong> is the title of the window with the code. It doesn't matter by default. For example, I set the value to "BooksList.vue".
          </p>

          <ui-input v-model="header" />
        </div>
        <div class="settings-doc-row">
          <p v-if="props.isRus">
            <strong>isCount</strong> - данный параметр отвечает за отображение номера строки. Если его не задать, то строки будут пронумерованы, по умолчанию равен "true".
          </p>

          <p v-if="!props.isRus">
            <strong>isCount</strong> - this parameter is responsible for displaying the row number. If it is not set, the rows will be numbered, the default value is "true".
          </p>

          <ui-checkbox
            v-model="isCount"
            value="isCount"
          >
            {{ isCount }}
          </ui-checkbox>
        </div>
        <div class="settings-doc-row">
          <p v-if="props.isRus">
            <strong>lineCount</strong> - данный параметр отвечает за то, сколько строк отображать. В него нужно передавать числа, если нужно отобразить все строки, то нужно задать значение "auto", или вообще не задавать данный параметр. По умолчанию задано значение "auto". Для примера я задал {{ lineCount }} строк, и сделал интервал вывода от 10 до 65 строк.
          </p>

          <p v-if="!props.isRus">
            <strong>lineCount</strong> - this parameter is responsible for how many lines to display. You need to pass numbers to it, if you want to display all the lines, then you need to set the value to "auto", or not set this parameter at all. The default value is "auto". For example, I set {{lineCount }} lines, and made an output interval from 10 to 65 lines.
          </p>

          <ui-select
            v-model="lineCount"
            :options="lineCountOptions"
          />
        </div>
        <div class="settings-doc-row">
          <p v-if="props.isRus">
            <strong>textBold</strong> - данный параметр отвечает за "толщину шрифта". По умолчанию задано "false".
          </p>

          <p v-if="!props.isRus">
            <strong>textBold</strong> - this parameter is responsible for the "font thickness". The default value is set to "false".
          </p>

          <ui-checkbox
            v-model="textBold"
            value="textBold"
          >
            {{ textBold }}
          </ui-checkbox>
        </div>
        <div class="settings-doc-row">
          <p v-if="props.isRus">
            <strong>headerBold</strong> - данный параметр отвечает за толщину шрифта заголовка окна с кодом. По умолчанию задано "false".
          </p>

          <p v-if="!props.isRus">
            <strong>headerBold</strong> - this parameter is responsible for the font thickness of the title of the window with the code. The default value is set to "false".
          </p>

          <ui-checkbox
            v-model="headerBold"
            value="headerBold"
          >
            {{ headerBold }}
          </ui-checkbox>
        </div>

        <div class="settings-doc-row">
          <template v-if="props.isRus">
            <strong>code</strong> - в данный параметр передаётся код, который нужно будет скопировать в буфер обмена. Это может быть как строка, так и объект.
          </template>

          <template v-if="!props.isRus">
            <strong>code</strong> - a code is passed to this parameter, which will need to be copied to the clipboard. It can be either a string or an object.
          </template>
        </div>

        <div class="settings-doc-row">
          <p v-if="props.isRus">
            <strong>title</strong> - подсказка, которая будет появляться при наведении на иконку "скопировать текст". По умолчанию задано значение "Copy code to clipboard". Как правило это нужно для интернационализации.
          </p>

          <p v-if="!props.isRus">
            <strong>title</strong> - a hint that will appear when you hover over the "copy text" icon. The default value is "Copy code to clipboard". As a rule, this is necessary for internationalization.
          </p>

          <ui-input v-model="title" />
        </div>
        <div class="settings-doc-row">
          <p v-if="props.isRus">
            <strong>successfulText</strong> - подсказка, которая будет появляться при наведении на иконку "скопировать текст" после того, как текст будет скопирован. По умолчанию задано значение "The code is copied to the clipboard". Как правило это нужно для интернационализации.
          </p>

          <p v-if="!props.isRus">
            <strong>successfulText</strong> is a hint that will appear when you hover over the "copy text" icon after the text has been copied. The default value is "The code is copied to the clipboard". As a rule, this is necessary for internationalization.
          </p>

          <ui-input v-model="successfulText" />
        </div>
        <div class="settings-doc-row">
          <p v-if="props.isRus">
            <strong>errorText</strong> - подсказка, которая будет появляться при наведении на иконку "скопировать текст" в случае возникновении ошибки (если текст не получится скопировать). По умолчанию задано значение "An error occurred while copying the code to the clipboard". Как правило это нужно для интернационализации.
          </p>

          <p v-if="!props.isRus">
            <strong>errorText</strong> - a hint that will appear when hovering over the "copy text" icon in case of an error (if the text cannot be copied). By default, the value is set to "An error occurred while copying the code to the clipboard". As a rule, this is necessary for internationalization.
          </p>

          <ui-input v-model="errorText" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue';

  import useLang from '@/components/code-examples/uselang.js';

  import CodeMarcupExample from '@/components/code-examples/doc/CodeMarcupExample.vue';
  import BooksListBody from '@/components/code-examples/books/BooksListBody.vue';
  import { bookListCode } from '@/components/code-examples/books/BookListCode.js';

  import UiInput from '@/UI/UIInput.vue';
  import UiCheckbox from '@/UI/UICheckbox.vue';
  import UiSelect from '@/UI/UISelect.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });

  const { codeParam } = useLang({
    lang: props.isRus ? 'ru' : 'en'
  });

  function* bLineCountOptions(from=5, stop=60, step=5) {
    let count = from;

    while (count <= stop) {
      const bVal = count + step;

      yield {
        id: bVal,
        title: bVal
      };

      count = bVal;
    }
  };

  const lineCountOptions = [
    {
      id: 'auto',
      title: 'auto'
    },
    ...bLineCountOptions()
  ];

  const header = ref('BooksList.vue');
  const isHeader = ref(true);
  const isCount = ref(true);
  const lineCount = ref(30);
  const textBold = ref(false);
  const headerBold = ref(false);
  const title = ref('Copy code to clipboard');
  const successfulText = ref('The code is copied to the clipboard');
  const errorText = ref('An error occurred while copying the code to the clipboard');

  watch(codeParam, (val) => {
    title.value = val.title || 'Copy code to clipboard';
    successfulText.value = val.successfulText || 'The code is copied to the clipboard';
    errorText.value = val.errorText || 'An error occurred while copying the code to the clipboard';
  },
  { immediate: true });
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