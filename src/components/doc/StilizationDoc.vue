<template>
  <div class="code-markup-doc">
    <template v-if="props.isRus">
      <h3>
        Стилизация компонентов
      </h3>

      <p>
        Данный раздел будет посвящён тому, как создавать свои темы, или стилизовывать существующие темы под свой проект. Данный раздел тесно связан с входным параметром "theme" для компонента "code-markup". На данный момент времени я сделал 2 темы: "darcula" и "monokai". За основу я взял тему "darcula", потому что она мне больше всего нравится.
      </p>

      <p>
        Для того, чтобы создать свою тему, нужно добавить во входной параметр "theme" название своей темы. Если вы зададите название темы - "some-theme", то в таком случае CSS класс для стилизации будет выглядеть следующим образом "code-markup_theme-<b>some-theme</b>".
      </p>

      <p>
        Ниже вы можете создать, или стилизовать нужную вам тему. На десктопной версии слева находится блок кода, он нужен для того, чтобы было видно результат применения стилей. Справа находится блок стилизации, его ещё можно назвать блоком настроек. Для удобства, я типовые стили сгруппировал по блокам. Заголовок блока является кликабельным, если на него нажать, то появятся настройки, в которых можно поменять нужные вам CSS переменные. Для начала выберите нужную вам тему, а после меняйте CSS переменные. Учтите, что все ваши изменения при смене темы пропадут, поэтому сначала выберите тему, а уже потом меняйте CSS переменные.
      </p>

      <p>
        Под блоком с кодом находится блок "посмотреть стили", все изменения в CSS переменных будут применены в нём. Код из него можно скопировать, и применить в вашем CSS. 
      </p>

      <p>
        В мобильной версии, блок с кодом, и блок "посмотреть стили" будут находиться ниже блока настроек, на мой взгляд так будет удобнее.
      </p>
    </template>

    <template v-if="!props.isRus">
      <h3>
        Stylization of components
      </h3>

      <p>
        This section will focus on how to create your own themes, or style existing themes to fit your project. This section is closely related to the "theme" input parameter for the "code-markup" component. At this point in time, I have made 2 themes: "darcula" and "monokai". I took the theme "darcula" as a basis, because I like it the most.
      </p>

      <p>
        In order to create your own theme, you need to add the name of your theme to the input parameter "theme". If you set the theme name to "some-theme", then the CSS styling class will look like this: "code-markup_theme-<b>some-theme</b>".
      </p>

      <p>
        Below you can create or style the theme you need. On the desktop version, there is a block of code on the left, it is needed in order to see the result of applying styles. On the right is the styling block, which can also be called the settings block. For convenience, I have grouped the standard styles into blocks. The block header is clickable, and if you click on it, settings will appear where you can change the CSS variables you need. First, select the theme you need, and then change the CSS variables. Keep in mind that all your changes will disappear when you change the theme, so first select the theme, and only then change the CSS variables.
      </p>

      <p>
        Under the code block is the "view styles" block, all changes to CSS variables will be applied in it. The code from it can be copied and applied in your CSS.
      </p>

      <p>
        In the mobile version, the code block and the "view styles" block will be located below the settings block, in my opinion it will be more convenient this way.
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
      <template #content="{ nameRow, smallClass }" >
        <div :class="[nameRow, smallClass]">
          <p v-if="props.isRus">
            *Выбор нужной темы. Если вы не читали блок выше, то имейте ввиду, что смена данного параметра сотрёт все ваши изменения. Поэтому сперва выберите нужную вам тему, а уже потом меняйте настройки ниже.
          </p>

          <p v-if="!props.isRus">
            *Select the desired theme. If you haven't read the block above, then keep in mind that changing this parameter will erase all your changes. Therefore, first select the theme you need, and only then change the settings below.
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

        <selected-line
          :is-rus="props.isRus"
          :name-row="nameRow"
          :smallClass="smallClass"
          v-model:cm-new-border="parameters.cmNewBorder"
          v-model:cm-changed-border="parameters.cmChangedBorder"
          v-model:cm-deleted-border="parameters.cmDeletedBorder"
          v-model:cm-deleted-opacity="parameters.cmDeletedOpacity"
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

        <com-comp
          :is-rus="props.isRus"
          :name-row="nameRow"
          :smallClass="smallClass"
          v-model:cm-main-color="parameters.cmMainColor"
          v-model:cm-text-color="parameters.cmTextColor"
          v-model:cm-number-color="parameters.cmNumberColor"
          v-model:cm-comment-color="parameters.cmCommentColor"
        />

        <template-comp 
          :is-rus="props.isRus"
          :name-row="nameRow"
          :smallClass="smallClass"
          v-model:cm-tag-color="parameters.cmTagColor"
          v-model:cm-attr-color="parameters.cmAttrColor"
        />

        <script-comp 
          :is-rus="props.isRus"
          :name-row="nameRow"
          :smallClass="smallClass"
          v-model:cm-key-color="parameters.cmKeyColor"
          v-model:cm-keyWords-color="parameters.cmKeyWordsColor"
          v-model:cm-variable-color="parameters.cmVariableColor"
          v-model:cm-function-color="parameters.cmFunctionColor"
        />

        <style-comp
          :is-rus="props.isRus"
          :name-row="nameRow"
          :smallClass="smallClass"
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