<template>
  <div class="code-markup-doc">
    <template v-if="props.isRus">
      <h3>
        Стилизация компонентов
      </h3>

      <p>
        Данный раздел будет посвящён тому, как создавать свои темы, или стилизовывать существующие темы под свой проект. Данный раздел тесно связан с входным параметром "theme" для компонента "code-markup". На данный момент времени я сделал 2 темы: "darcula" и "monokai". За основу я взял тему "darcula", потому что она мне больше всего нравится. Для того, чтобы создать свою тему, нужно добавить во входной параметр "theme" название своей темы. Если вы зададите название темы - "some-theme", то в таком случае CSS класс для стилизации будет выглядеть следующим образом "code-markup_theme-some-theme".
      </p>
    </template>

    <template v-if="!props.isRus">
      <h3>
        Stylization of components
      </h3>

      <p>
        This section will focus on how to create your own themes, or style existing themes to fit your project. This section is closely related to the "theme" input parameter for the "code-markup" component. At this point in time, I have made 2 themes: "darcula" and "monokai". I took the theme "darcula" as a basis, because I like it the most. In order to create your own theme, you need to add the name of your theme to the input parameter "theme". If you set the theme name to "some-theme", then the CSS styling class will look like this: "code-markup_theme-some-theme".
      </p>
    </template>

    <settings-doc>
      <template #code>
        <code-markup
          v-bind="codeParam"
          header="Some theme"
          :style="styleComp"
        >
          <books-list-body />
        </code-markup>

        <watch-css
          :is-rus="props.isRus"
          :code="codeComp"
          :parameters="parameters"
        />
      </template>
      <template #content="{ nameRow }" >
        <com-settings
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-bg="parameters.cmBg"
          v-model:cm-border-radius="parameters.cmBorderRadius"
          v-model:cm-text-font-size="parameters.cmTextFontSize"
          v-model:cm-text-font-family="parameters.cmTextFontFamily"
          v-model:cm-text-line-height="parameters.cmTextLineHeight"
          v-model:cm-max-height-body="parameters.cmMaxHeightBody"
        />

        <header-group
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-header-padding="parameters.cmHeaderPadding"
          v-model:cm-header-font-size="parameters.cmHeaderFontSize"
          v-model:cm-header-color="parameters.cmHeaderColor"
        />

        <count-numbers
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-count-bg="parameters.cmCountBg"
          v-model:cm-count-color="parameters.cmCountColor"
          v-model:cm-count-padding="parameters.cmCountPadding"
          v-model:cm-count-border-right="parameters.cmCountBorderRight"
        />

        <copy-code
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-icon-color="parameters.cmIconColor"
          v-model:cm-icon-error-color="parameters.cmIconErrorColor"
          v-model:cm-icon-is-copy-color="parameters.cmIconIsCopyColor"
        />

        <active-line
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-active-bg="parameters.cmActiveBg"
          v-model:cm-active-count-color="parameters.cmActiveCountColor"
          v-model:cm-active-count-bg="parameters.cmActiveCountBg"
          v-model:cm-active-count-right-color="parameters.cmActiveCountRightColor"
        />

        <selection-group
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-selection-bg="parameters.cmSelectionBg"
          v-model:cm-selection-color="parameters.cmSelectionColor"
        />

        <scroll-group
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-scroll-bar-bg="parameters.cmScrollBarBg"
          v-model:cm-thumb-bg="parameters.cmThumbBg"
        />

        <selected-line
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-new-border="parameters.cmNewBorder"
          v-model:cm-changed-border="parameters.cmChangedBorder"
          v-model:cm-deleted-border="parameters.cmDeletedBorder"
          v-model:cm-deleted-opacity="parameters.cmDeletedOpacity"
        />

        <com-comp
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-main-color="parameters.cmMainColor"
          v-model:cm-text-color="parameters.cmTextColor"
          v-model:cm-number-color="parameters.cmNumberColor"
          v-model:cm-comment-color="parameters.cmCommentColor"
        />

        <template-comp 
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-tag-color="parameters.cmTagColor"
          v-model:cm-attr-color="parameters.cmAttrColor"
        />

        <script-comp 
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-key-color="parameters.cmKeyColor"
          v-model:cm-keyWords-color="parameters.cmKeyWordsColor"
          v-model:cm-variable-color="parameters.cmVariableColor"
          v-model:cm-function-color="parameters.cmFunctionColor"
        />

        <style-comp
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-style-class="parameters.cmStyleClass"
          v-model:cm-style-id="parameters.cmStyleId"
          v-model:cm-style-tag="parameters.cmStyleTag"
          v-model:cm-style-key="parameters.cmStyleKey"
          v-model:cm-style-param="parameters.cmStyleParam"
          v-model:cm-style-unit-mes="parameters.cmStyleUnitMes"
          v-model:cm-style-ampersand="parameters.cmStyleAmpersand"
          v-model:cm-style-curly-brace="parameters.cmStyleCurlyBrace"
        />
      </template>
    </settings-doc>
  </div>
</template>

<script setup>
  import { reactive, computed } from 'vue';

  import useLang from '@/components/code-examples/uselang.js';

  import SettingsDoc from '@/components/SettingsDoc.vue';
  import BooksListBody from '@/components/code-examples/books/BooksListBody.vue';
  import WatchCss from '@/components/watch-css/WatchCss.vue';

  import ComSettings from './stilization/ComSettings.vue';
  import ActiveLine from './stilization/ActiveLine.vue';
  import CopyCode from './stilization/CopyCode.vue';
  import CountNumbers from './stilization/CountNumbers.vue';
  import HeaderGroup from './stilization/HeaderGroup.vue';
  import SelectionGroup from './stilization/SelectionGroup.vue';
  import ScrollGroup from './stilization/ScrollGroup.vue';
  import SelectedLine from './stilization/SelectedLine.vue';
  import ComComp from './stilization/ComComp.vue';
  import TemplateComp from './stilization/TemplateComp.vue';
  import ScriptComp from './stilization/ScriptComp.vue';
  import StyleComp from './stilization/StyleComp.vue';

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

  const parameters = reactive({
    cmBg:'#212122',
    cmBorderRadius: '5px',
    cmTextFontSize: "1em",
    cmTextFontFamily: "inherit",
    cmTextLineHeight: "1.5em",
    cmMaxHeightBody: 'auto',
    // Заголовок
    cmHeaderPadding: '.5em 1em',
    cmHeaderFontSize: '1em',
    cmHeaderColor: '#ffc661',
    // Номера строк
    cmCountBg: '#5e5d5d',
    cmCountColor: '#fff',
    cmCountPadding: "0 .35em",
    cmCountBorderRight: '#5e5d5d',
    // Иконка скопировать код
    cmIconColor: '#fff',
    cmIconErrorColor: '#980505',
    cmIconIsCopyColor: '#60a802',
    // Активная линия
    cmActiveBg: '#2a2a2b',
    cmActiveCountBg: '#454545',
    cmActiveCountColor: '#fff',
    cmActiveCountRightColor: '#454545',
    // Выделение текста
    cmSelectionBg: '#647f54',
    cmSelectionColor: '#fff',
    // Полоса прокрутки
    cmScrollBarBg: '#212122',
    cmThumbBg: '#ffc661',
    // Стилизация строк кода
    cmNewBorder: '#60a802',
    cmChangedBorder: '#6495ed',
    cmDeletedBorder: '#92000a',
    cmDeletedOpacity: '.6',
    // Стилизация общих компонентов
    cmMainColor: '#a9b7c6',
    cmTextColor: '#647f54',
    cmNumberColor: '#6897bb',
    cmCommentColor: '#808080',
    // Стилизация компонентов шаблона
    cmTagColor: '#ffc661',
    cmAttrColor: '#d4d4c9',
    // Стилизация компонентов блока script
    cmKeyColor: '#9876aa',
    cmKeyWordsColor: '#cc7832',
    cmVariableColor: '#9876aa',
    cmFunctionColor: '#ffc661',
    // Стилизация компонентов стилей
    cmStyleClass: '#ffc661',
    cmStyleId: '#ffc661',
    cmStyleTag: '#ffc661',
    cmStyleKey: '#d4d4c9',
    cmStyleParam: '#9876aa',
    cmStyleUnitMes: '#a9b7c6',
    cmStyleAmpersand: '#ffc661',
    cmStyleCurlyBrace: '#ffc661',
  });

  const styleComp = computed(() => ({
    '--cm-bg': parameters.cmBg,
    '--cm-border-radius': parameters.cmBorderRadius,
    '--cm-text-font-size': parameters.cmTextFontSize,
    '--cm-text-font-family': parameters.cmTextFontFamily,
    '--cm-text-line-height': parameters.cmTextLineHeight,
    '--cm-count-padding': parameters.cmCountPadding,
    '--cm-max-height-body': parameters.cmMaxHeightBody,
    '--cm-header-padding': parameters.cmHeaderPadding,
    '--cm-header-font-size': parameters.cmHeaderFontSize,
    '--cm-header-color': parameters.cmHeaderColor,
    '--cm-count-bg': parameters.cmCountBg,
    '--cm-count-color': parameters.cmCountColor,
    '--cm-count-border-right': parameters.cmCountBorderRight,
    '--cm-icon-color': parameters.cmIconColor,
    '--cm-icon-error-color': parameters.cmIconErrorColor,
    '--cm-icon-is-copy-color': parameters.cmIconIsCopyColor,
    '--cm-active-bg': parameters.cmActiveBg,
    '--cm-active-count-bg': parameters.cmActiveCountBg,
    '--cm-active-count-color': parameters.cmActiveCountColor,
    '--cm-active-count-right-color': parameters.cmActiveCountRightColor,
    '--cm-selection-bg': parameters.cmSelectionBg,
    '--cm-selection-color': parameters.cmSelectionColor,
    '--cm-scroll-bar-bg': parameters.cmScrollBarBg,
    '--cm-thumb-bg': parameters.cmThumbBg,
    '--cm-new-border': parameters.cmNewBorder,
    '--cm-changed-border': parameters.cmChangedBorder,
    '--cm-deleted-border': parameters.cmDeletedBorder,
    '--cm-deleted-opacity': parameters.cmDeletedOpacity,
    '--cm-main-color': parameters.cmMainColor,
    '--cm-text-color': parameters.cmTextColor,
    '--cm-number-color': parameters.cmNumberColor,
    '--cm-comment-color': parameters.cmCommentColor,
    '--cm-tag-color': parameters.cmTagColor,
    '--cm-attr-color': parameters.cmAttrColor,
    '--cm-key-color': parameters.cmKeyColor,
    '--cm-key-words-color': parameters.cmKeyWordsColor,
    '--cm-variable-color': parameters.cmVariableColor,
    '--cm-function-color': parameters.cmFunctionColor,
    '--cm-style-class': parameters.cmStyleClass,
    '--cm-style-id': parameters.cmStyleId,
    '--cm-style-tag': parameters.cmStyleTag,
    '--cm-style-key': parameters.cmStyleKey,
    '--cm-style-param': parameters.cmStyleParam,
    '--cm-style-unit-mes': parameters.cmStyleUnitMes,
    '--cm-style-ampersand': parameters.cmStyleAmpersand,
    '--cm-style-curly-brace': parameters.cmStyleCurlyBrace,
  }));

  const codeComp = computed(() => `.code-markup_theme-some-theme {
  --cm-bg: ${parameters.cmBg};
  --cm-border-radius: ${parameters.cmBorderRadius};
  --cm-main-color: ${parameters.cmMainColor};
  --cm-text-font-size: ${parameters.cmTextFontSize};
  --cm-text-font-family: ${parameters.cmTextFontFamily};
  --cm-text-line-height: ${parameters.cmTextLineHeight};
  --cm-max-height-body: ${parameters.cmMaxHeightBody};

  /* Styling the window title with the code */
  --cm-header-padding: ${parameters.cmHeaderPadding};
  --cm-header-font-size: ${parameters.cmHeaderFontSize};
  --cm-header-color: ${parameters.cmHeaderColor};

  /* Stylization of line numbers */
  --cm-count-bg: ${parameters.cmCountBg};
  --cm-count-color: ${parameters.cmCountColor};
  --cm-count-padding: ${parameters.cmCountPadding};
  --cm-count-border-right: ${parameters.cmCountBorderRight};

  /* Stylization of "copy code" icons */
  --cm-icon-color: ${parameters.cmIconColor};
  --cm-icon-error-color: ${parameters.cmIconErrorColor};
  --cm-icon-is-copy-color: ${parameters.cmIconIsCopyColor};

  /* Styling the active line */
  --cm-active-bg: ${parameters.cmActiveBg};
  --cm-active-count-bg: ${parameters.cmActiveCountBg};
  --cm-active-count-color: ${parameters.cmActiveCountColor};
  --cm-active-count-right-color: ${parameters.cmActiveCountRightColor};

  /* Stylization text selection */
  --cm-selection-bg: ${parameters.cmSelectionBg};
  --cm-selection-color: ${parameters.cmSelectionColor};

  /* Styling the scrollbar */
  --cm-scroll-bar-bg: ${parameters.cmScrollBarBg};
  --cm-thumb-bg: ${parameters.cmThumbBg};

  /* Stylization "lines of code" */
  --cm-new-border: ${parameters.cmNewBorder};
  --cm-changed-border: ${parameters.cmChangedBorder};
  --cm-deleted-border: ${parameters.cmDeletedBorder.value};
  --cm-deleted-opacity: ${parameters.cmDeletedOpacity};

  /* Styling common components */
  --cm-main-color: ${parameters.cmMainColor};
  --cm-text-color: ${parameters.cmTextColor};
  --cm-number-color: ${parameters.cmNumberColor};
  --cm-comment-color: ${parameters.cmCommentColor};

  /* Styling template components */
  --cm-tag-color: ${parameters.cmTagColor};
  --cm-attr-color: ${parameters.cmAttrColor};

  /* Stylization of the "script" block components */
  --cm-key-color: ${parameters.cmKeyColor};
  --cm-key-words-color: ${parameters.cmKeyWordsColor};
  --cm-variable-color: ${parameters.cmVariableColor};
  --cm-function-color: ${parameters.cmFunctionColor};

  /* Stylization of the "style" block components */
  --cm-style-class: ${parameters.cmStyleClass};
  --cm-style-id: ${parameters.cmStyleId};
  --cm-style-tag: ${parameters.cmStyleTag};
  --cm-style-key: ${parameters.cmStyleKey};
  --cm-style-param: ${parameters.cmStyleParam};
  --cm-style-unit-mes: ${parameters.cmStyleUnitMes};
  --cm-style-ampersand: ${parameters.cmStyleAmpersand};
  --cm-style-curly-brace: ${parameters.cmStyleCurlyBrace};
}`);
</script>

<style lang="scss" scoped></style>