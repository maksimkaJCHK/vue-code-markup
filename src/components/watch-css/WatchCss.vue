<template>
  <div
    class="watch-css"
    :class="{ 'watch-css_is-code': isCode }"
  >
    <div
      class="watch-css__text"
      @click="chIsCode"
    >
      <template v-if="props.isRus">
        Посмотреть стили
      </template>
      <template v-if="!props.isRus">
        View styles
      </template>
    </div>

    <div class="watch-css__block">
      <code-markup
        v-if="isCode"
        :is-header="false"
        :is-count="false"
        :code="props.code"
        :line-count="15"
        :key="props.code"
      >
        <code-line>
          <mu-style-class code=".code-markup_theme-some-theme " />
          <mu-type code="{" />
        </code-line>
          <watch-css-row
            keyProps="--cm-bg"
            :valueProps="props.parameters.cmBg"
          />
          <watch-css-row
            keyProps="--cm-border-radius"
            :valueProps="props.parameters.cmBorderRadius"
          />
          <watch-css-row
            keyProps="--cm-text-font-size"
            :valueProps="props.parameters.cmTextFontSize"
          />
          <watch-css-row
            keyProps="--cm-text-font-family"
            :valueProps="props.parameters.cmTextFontFamily"
          />
          <watch-css-row
            keyProps="--cm-text-line-height"
            :valueProps="props.parameters.cmTextLineHeight"
          />
          <watch-css-row
            keyProps="--cm-max-height-body"
            :valueProps="props.parameters.cmMaxHeightBody"
          />

          <watch-css-comment code='Styling the window title with the code' />
          <watch-css-row
            keyProps="--cm-header-padding"
            :valueProps="props.parameters.cmHeaderPadding"
          />
          <watch-css-row
            keyProps="--cm-header-font-size"
            :valueProps="props.parameters.cmHeaderFontSize"
          />
          <watch-css-row
            keyProps="--cm-header-color"
            :valueProps="props.parameters.cmHeaderColor"
          />

          <watch-css-comment code='Stylization of line numbers' />
          <watch-css-row
            keyProps="--cm-count-bg"
            :valueProps="props.parameters.cmCountBg"
          />
          <watch-css-row
            keyProps="--cm-count-color"
            :valueProps="props.parameters.cmCountColor"
          />
          <watch-css-row
            keyProps="--cm-count-padding"
            :valueProps="props.parameters.cmCountPadding"
          />
          <watch-css-row
            keyProps="--cm-count-border-right"
            :valueProps="props.parameters.cmCountBorderRight"
          />

          <watch-css-comment code='Stylization of "copy code" icons' />
          <watch-css-row
            keyProps="--cm-icon-color"
            :valueProps="props.parameters.cmIconColor"
          />
          <watch-css-row
            keyProps="--cm-icon-error-color"
            :valueProps="props.parameters.cmIconErrorColor"
          />
          <watch-css-row
            keyProps="--cm-icon-is-copy-color"
            :valueProps="props.parameters.cmIconIsCopyColor"
          />

          <watch-css-comment code="Styling the active line" />
          <watch-css-row
            keyProps="--cm-active-bg"
            :valueProps="props.parameters.cmActiveBg"
          />
          <watch-css-row
            keyProps="--cm-active-count-bg"
            :valueProps="props.parameters.cmActiveCountBg"
          />
          <watch-css-row
            keyProps="--cm-active-count-color"
            :valueProps="props.parameters.cmActiveCountColor"
          />
          <watch-css-row
            keyProps="--cm-active-count-right-color"
            :valueProps="props.parameters.cmActiveCountRightColor"
          />

          <watch-css-comment code="Stylization text selection" />
          <watch-css-row
            keyProps="--cm-selection-bg"
            :valueProps="props.parameters.cmSelectionBg"
          />
          <watch-css-row
            keyProps="--cm-selection-color"
            :valueProps="props.parameters.cmSelectionColor"
          />

          <watch-css-comment code="Styling the scrollbar" />
          <watch-css-row
            keyProps="--cm-scroll-bar-bg"
            :valueProps="props.parameters.cmScrollBarBg"
          />
          <watch-css-row
            keyProps="--cm-thumb-bg"
            :valueProps="props.parameters.cmThumbBg"
          />

          <watch-css-comment code='Stylization "lines of code"' />
          <watch-css-row
            keyProps="--cm-new-border"
            :valueProps="props.parameters.cmNewBorder"
          />
          <watch-css-row
            keyProps="--cm-changed-border"
            :valueProps="props.parameters.cmChangedBorder"
          />
          <watch-css-row
            keyProps="--cm-deleted-border"
            :valueProps="props.parameters.cmDeletedBorder"
          />
          <watch-css-row
            keyProps="--cm-deleted-opacity"
            :valueProps="props.parameters.cmDeletedOpacity"
          />

          <watch-css-comment code='Styling common components' />
          <watch-css-row
            keyProps="--cm-main-color"
            :valueProps="props.parameters.cmMainColor"
          />
          <watch-css-row
            keyProps="--cm-text-color"
            :valueProps="props.parameters.cmTextColor"
          />
          <watch-css-row
            keyProps="--cm-number-color"
            :valueProps="props.parameters.cmNumberColor"
          />
          <watch-css-row
            keyProps="--cm-comment-color"
            :valueProps="props.parameters.cmCommentColor"
          />

          <watch-css-comment code='Styling template components' />
          <watch-css-row
            keyProps="--cm-tag-color"
            :valueProps="props.parameters.cmTagColor"
          />
          <watch-css-row
            keyProps="--cm-attr-color"
            :valueProps="props.parameters.cmAttrColor"
          />

          <watch-css-comment code='Stylization of the "script" block components' />
          <watch-css-row
            keyProps="--cm-key-color"
            :valueProps="props.parameters.cmKeyColor"
          />
          <watch-css-row
            keyProps="--cm-key-words-color"
            :valueProps="props.parameters.cmKeyWordsColor"
          />
          <watch-css-row
            keyProps="--cm-variable-color"
            :valueProps="props.parameters.cmVariableColor"
          />
          <watch-css-row
            keyProps="--cm-function-color"
            :valueProps="props.parameters.cmFunctionColor"
          />

          <watch-css-comment code='Stylization of the "style" block components' />
          <watch-css-row
            keyProps="--cm-style-class"
            :valueProps="props.parameters.cmStyleClass"
          />
          <watch-css-row
            keyProps="--cm-style-id"
            :valueProps="props.parameters.cmStyleId"
          />
          <watch-css-row
            keyProps="--cm-style-tag"
            :valueProps="props.parameters.cmStyleTag"
          />
          <watch-css-row
            keyProps="--cm-style-key"
            :valueProps="props.parameters.cmStyleKey"
          />
          <watch-css-row
            keyProps="--cm-style-param"
            :valueProps="props.parameters.cmStyleParam"
          />
          <watch-css-row
            keyProps="--cm-style-unit-mes"
            :valueProps="props.parameters.cmStyleUnitMes"
          />
          <watch-css-row
            keyProps="--cm-style-ampersand"
            :valueProps="props.parameters.cmStyleAmpersand"
          />
          <watch-css-row
            keyProps="--cm-style-curly-brace"
            :valueProps="props.parameters.cmStyleCurlyBrace"
          />
        <code-line>
          <mu-type code="}" />
        </code-line>
      </code-markup>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import WatchCssRow from './WatchCssRow.vue';
  import WatchCssComment from './WatchCssComment.vue';

  const props = defineProps([
    'isRus',
    'code',
    'parameters',
  ]);

  const isCode = ref(false);
  const chIsCode = () => isCode.value = !isCode.value;
</script>

<style lang="scss">
  .watch-css {
    color: #fff;
    margin-top: 15px;
    background: #212122;
    border-radius: 5px;

    &_is-code {
      .watch-css__block {
        display: block;
      }
    }

    &__text,
    &__block {
      padding: 10px 15px;
    }

    &__text {
      padding-right: 25px;
      cursor: pointer;
      user-select: none;
      position: relative;

      &::after {
        top: 50%;
        right: 10px;
        content: ' ';
        display: block;
        position: absolute;
        margin-top: -2px;
        border: 5px solid transparent;
        border-top: 5px solid #fff;
      }
    }

    &__block {
      margin: 0;
      display: none;
      padding: 0 3px 0 5px;
    }
  }
</style>