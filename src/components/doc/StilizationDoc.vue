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
          :cmBg="cmBg"
          :cmBorderRadius="cmBorderRadius"
          :cmTextFontSize="cmTextFontSize"
          :cmTextFontFamily="cmTextFontFamily"
          :cmTextLineHeight="cmTextLineHeight"
          :cmCountPadding="cmCountPadding"
          :cmMaxHeightBody="cmMaxHeightBody"
          :cmHeaderPadding="cmHeaderPadding"
          :cmHeaderFontSize="cmHeaderFontSize"
          :cmHeaderColor="cmHeaderColor"
          :cmCountBg="cmCountBg"
          :cmCountColor="cmCountColor"
          :cmCountBorderRight="cmCountBorderRight"
          :cmIconColor="cmIconColor"
          :cmIconErrorColor="cmIconErrorColor"
          :cmIconIsCopyColor="cmIconIsCopyColor"
          :cmActiveBg="cmActiveBg"
          :cmActiveCountBg="cmActiveCountBg"
          :cmActiveCountColor="cmActiveCountColor"
          :cmActiveCountRightColor="cmActiveCountRightColor"
          :cmSelectionBg="cmSelectionBg"
          :cmSelectionColor="cmSelectionColor"
          :cmScrollBarBg="cmScrollBarBg"
          :cmThumbBg="cmThumbBg"
          :cmNewBorder="cmNewBorder"
          :cmChangedBorder="cmChangedBorder"
          :cmDeletedBorder="cmDeletedBorder"
          :cmDeletedOpacity="cmDeletedOpacity"
          :cmMainColor="cmMainColor"
          :cmTextColor="cmTextColor"
          :cmNumberColor="cmNumberColor"
          :cmCommentColor="cmCommentColor"
          :cmTagColor="cmTagColor"
          :cmAttrColor="cmAttrColor"
        />
      </template>
      <template #content="{ nameRow }" >
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-bg</strong> - данная CSS переменная отвечает за фон окна с кодом.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-bg</strong> - this CSS variable is responsible for the "background" of the window with the code.
          </p>

          <ui-input v-model="cmBg" />
        </div>
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-border-radius</strong> - данная CSS переменная отвечает за "border-radius" окна с кодом.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-border-radius</strong> - this CSS variable is responsible for the "border-radius" of the window with the code.
          </p>

          <ui-input v-model="cmBorderRadius" />
        </div>
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-text-font-size</strong> - данная CSS переменная отвечает за размер шрифта окна с кодом.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-text-font-size</strong> - this CSS variable is responsible for the "font-size" of the window with the code.
          </p>

          <ui-input v-model="cmTextFontSize" />
        </div>
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-text-font-family</strong> - данная CSS переменная отвечает за семейство шрифта окна с кодом.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-text-font-family</strong> - this CSS variable is responsible for the font family of the window with the code.
          </p>

          <ui-input v-model="cmTextFontFamily" />
        </div>
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-text-line-height</strong> - данная CSS переменная отвечает за высоту шрифта окна с кодом.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-text-line-height</strong> - this CSS variable is responsible for the "line-height" of the window with the code.
          </p>

          <ui-input v-model="cmTextLineHeight" />
        </div>
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>-cm-max-height-body</strong> - данная CSS переменная отвечает за максимальную высоту окна кода без шапки.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-max-height-body</strong> - this CSS variable is responsible for the "max-height" of the code window without a header.
          </p>

          <ui-input v-model="cmMaxHeightBody" />
        </div>

        <header-group
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-header-padding="cmHeaderPadding"
          v-model:cm-header-font-size="cmHeaderFontSize"
          v-model:cm-header-color="cmHeaderColor"
        />

        <count-numbers
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-count-bg="cmCountBg"
          v-model:cm-count-color="cmCountColor"
          v-model:cm-count-padding="cmCountPadding"
          v-model:cm-count-border-right="cmCountBorderRight"
        />

        <copy-code
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-icon-color="cmIconColor"
          v-model:cm-icon-error-color="cmIconErrorColor"
          v-model:cm-icon-is-copy-color="cmIconIsCopyColor"
        />

        <active-line
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-active-bg="cmActiveBg"
          v-model:cm-active-count-color="cmActiveCountColor"
          v-model:cm-active-count-bg="cmActiveCountBg"
          v-model:cm-active-count-right-color="cmActiveCountRightColor"
        />

        <selection-group
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-selection-bg="cmSelectionBg"
          v-model:cm-selection-color="cmSelectionColor"
        />

        <scroll-group
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-scroll-bar-bg="cmScrollBarBg"
          v-model:cm-thumb-bg="cmThumbBg"
        />

        <selected-line
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-new-border="cmNewBorder"
          v-model:cm-changed-border="cmChangedBorder"
          v-model:cm-deleted-border="cmDeletedBorder"
          v-model:cm-deleted-opacity="cmDeletedOpacity"
        />

        <com-comp
          :is-rus="props.isRus"
          :name-row="nameRow"
          v-model:cm-main-color="cmMainColor"
          v-model:cm-text-color="cmTextColor"
          v-model:cm-number-color="cmNumberColor"
          v-model:cm-comment-color="cmCommentColor"
        />
      </template>
    </settings-doc>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  import useLang from '@/components/code-examples/uselang.js';

  import SettingsDoc from '@/components/SettingsDoc.vue';
  import BooksListBody from '@/components/code-examples/books/BooksListBody.vue';
  import WatchCss from '@/components/watch-css/WatchCss.vue';

  import ActiveLine from './stilization/ActiveLine.vue';
  import CopyCode from './stilization/CopyCode.vue';
  import CountNumbers from './stilization/CountNumbers.vue';
  import HeaderGroup from './stilization/HeaderGroup.vue';
  import SelectionGroup from './stilization/SelectionGroup.vue';
  import ScrollGroup from './stilization/ScrollGroup.vue';
  import SelectedLine from './stilization/SelectedLine.vue';
  import ComComp from './stilization/ComComp.vue';

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

  const cmBg = ref('#212122');
  const cmBorderRadius = ref('5px');
  const cmTextFontSize = ref("1em");
  const cmTextFontFamily = ref("inherit");
  const cmTextLineHeight = ref("1.5em");
  const cmMaxHeightBody = ref('auto');
  // Заголовок
  const cmHeaderPadding = ref('.5em 1em');
  const cmHeaderFontSize = ref('1em');
  const cmHeaderColor = ref('#ffc661');
  // Номера строк
  const cmCountBg = ref('#5e5d5d');
  const cmCountColor = ref('#fff');
  const cmCountPadding = ref("0 .35em");
  const cmCountBorderRight = ref('#5e5d5d');
  // Иконка скопировать код
  const cmIconColor = ref('#fff');
  const cmIconErrorColor = ref('#980505');
  const cmIconIsCopyColor = ref('#60a802');
  // Активная линия
  const cmActiveBg = ref('#2a2a2b');
  const cmActiveCountBg = ref('#454545');
  const cmActiveCountColor = ref('#fff');
  const cmActiveCountRightColor = ref('#454545');
  // Выделение текста
  const cmSelectionBg = ref('#647f54');
  const cmSelectionColor = ref('#fff');
  // Полоса прокрутки
  const cmScrollBarBg = ref('#212122');
  const cmThumbBg = ref('#ffc661');

  // Стилизация строк кода
  const cmNewBorder = ref('#60a802');
  const cmChangedBorder = ref('#6495ed');
  const cmDeletedBorder = ref('#92000a');
  const cmDeletedOpacity = ref('.6');

  // Стилизация общих компонентов
  const cmMainColor = ref('#a9b7c6');
  const cmTextColor = ref('#647f54');
  const cmNumberColor = ref('#6897bb');
  const cmCommentColor = ref('#808080');

  // Стилизация компонентов шаблона
  const cmTagColor = ref('#ffc661');
  const cmAttrColor = ref('#d4d4c9');

  const styleComp = computed(() => ({
    '--cm-bg': cmBg.value,
    '--cm-border-radius': cmBorderRadius.value,
    '--cm-text-font-size': cmTextFontSize.value,
    '--cm-text-font-family': cmTextFontFamily.value,
    '--cm-text-line-height': cmTextLineHeight.value,
    '--cm-count-padding': cmCountPadding.value,
    '--cm-max-height-body': cmMaxHeightBody.value,
    '--cm-header-padding': cmHeaderPadding.value,
    '--cm-header-font-size': cmHeaderFontSize.value,
    '--cm-header-color': cmHeaderColor.value,
    '--cm-count-bg': cmCountBg.value,
    '--cm-count-color': cmCountColor.value,
    '--cm-count-border-right': cmCountBorderRight.value,
    '--cm-icon-color': cmIconColor.value,
    '--cm-icon-error-color': cmIconErrorColor.value,
    '--cm-icon-is-copy-color': cmIconIsCopyColor.value,
    '--cm-active-bg': cmActiveBg.value,
    '--cm-active-count-bg': cmActiveCountBg.value,
    '--cm-active-count-color': cmActiveCountColor.value,
    '--cm-active-count-right-color': cmActiveCountRightColor.value,
    '--cm-selection-bg': cmSelectionBg.value,
    '--cm-selection-color': cmSelectionColor.value,
    '--cm-scroll-bar-bg': cmScrollBarBg.value,
    '--cm-thumb-bg': cmThumbBg.value,
    '--cm-new-border': cmNewBorder.value,
    '--cm-changed-border': cmChangedBorder.value,
    '--cm-deleted-border': cmDeletedBorder.value,
    '--cm-deleted-opacity': cmDeletedOpacity.value,
    '--cm-main-color': cmMainColor.value,
    '--cm-text-color': cmTextColor.value,
    '--cm-number-color': cmNumberColor.value,
    '--cm-comment-color': cmCommentColor.value,
    '--cm-tag-color': cmTagColor.value,
    '--cm-attr-color': cmAttrColor.value,
  }));

  const codeComp = computed(() => `.code-markup_theme-some-theme {
  --cm-bg: ${cmBg.value};
  --cm-border-radius: ${cmBorderRadius.value};
  --cm-main-color: ${cmMainColor.value};
  --cm-text-font-size: ${cmTextFontSize.value};
  --cm-text-font-family: ${cmTextFontFamily.value};
  --cm-text-line-height: ${cmTextLineHeight.value};
  --cm-max-height-body: ${cmMaxHeightBody.value};

  /* Styling the window title with the code */
  --cm-header-padding: ${cmHeaderPadding.value};
  --cm-header-font-size: ${cmHeaderFontSize.value};
  --cm-header-color: ${cmHeaderColor.value};

  /* Stylization of line numbers */
  --cm-count-bg: ${cmCountBg.value};
  --cm-count-color: ${cmCountColor.value};
  --cm-count-padding: ${cmCountPadding.value};
  --cm-count-border-right: ${cmCountBorderRight.value};

  /* Stylization of "copy code" icons */
  --cm-icon-color: ${cmIconColor.value};
  --cm-icon-error-color: ${cmIconErrorColor.value};
  --cm-icon-is-copy-color: ${cmIconIsCopyColor.value};

  /* Styling the active line */
  --cm-active-bg: ${cmActiveBg.value};
  --cm-active-count-bg: ${cmActiveCountBg.value};
  --cm-active-count-color: ${cmActiveCountColor.value};
  --cm-active-count-right-color: ${cmActiveCountRightColor.value};

  /* Stylization text selection */
  --cm-selection-bg: ${cmSelectionBg.value};
  --cm-selection-color: ${cmSelectionColor.value};

  /* Styling the scrollbar */
  --cm-scroll-bar-bg: ${cmScrollBarBg.value};
  --cm-thumb-bg: ${cmThumbBg.value};

  /* Stylization "lines of code" */
  --cm-new-border: ${cmNewBorder.value};
  --cm-changed-border: ${cmChangedBorder.value};
  --cm-deleted-border: ${cmDeletedBorder.value};
  --cm-deleted-opacity: ${cmDeletedOpacity.value};

  /* Styling common components */
  --cm-main-color: ${cmMainColor.value};
  --cm-text-color: ${cmTextColor.value};
  --cm-number-color: ${cmNumberColor.value};
  --cm-comment-color: ${cmCommentColor.value};

  /* Styling template components */
  --cm-tag-color: ${cmTagColor.value};
  --cm-attr-color: ${cmAttrColor.value};
}`);
</script>

<style lang="scss" scoped></style>