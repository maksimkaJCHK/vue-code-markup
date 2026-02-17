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
          :style="stylesComp"
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
        <div :class="nameRow">
          <p>

          </p>

          <p>

          </p>

          <ui-select
            v-model="theme"
            :options="themeOptions"
          />
        </div>

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
  import useLang from '@/components/code-examples/uselang.js';

  import useParameters from './hooks/stilization/useParameters.js';
  import useServices from './hooks/stilization/useServices.js';
  import useThemes from './hooks/stilization/useThemes.js';

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

  const parameters = useParameters();
  const { stylesComp, codeComp } = useServices(parameters);
  const { theme, themeOptions } = useThemes(parameters);
</script>

<style lang="scss" scoped></style>