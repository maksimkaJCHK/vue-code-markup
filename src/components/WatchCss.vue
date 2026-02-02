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
        :code="codeComp"
      >
        <code-line>
          <mu-style-class code=".code-markup_theme-some-theme " />
          <mu-type code="{" />
        </code-line>
          <watch-css-row
            keyProps="--cm-bg"
            :valueProps="props.cmBg"
          />
          <watch-css-row
            keyProps="--cm-border-radius"
            :valueProps="props.cmBorderRadius"
          />
          <watch-css-row
            keyProps="--cm-text-font-size"
            :valueProps="props.cmTextFontSize"
          />
          <watch-css-row
            keyProps="--cm-text-font-family"
            :valueProps="props.cmTextFontFamily"
          />
          <watch-css-row
            keyProps="--cm-text-line-height"
            :valueProps="props.cmTextLineHeight"
          />
          <watch-css-row
            keyProps="--cm-count-padding"
            :valueProps="props.cmCountPadding"
          />
          <watch-css-row
            keyProps="--cm-max-height-body"
            :valueProps="props.cmMaxHeightBody"
          />
        <code-line>
          <mu-type code="}" />
        </code-line>
      </code-markup>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import WatchCssRow from './WatchCssRow.vue';

  const props = defineProps([
    'isRus',
    'code',
    'cmBg',
    'cmBorderRadius',
    'cmTextFontSize',
    'cmTextFontFamily',
    'cmTextLineHeight',
    'cmCountPadding',
    'cmMaxHeightBody',
  ]);

  const bObj = (obj) => JSON.stringify(obj)
    .replace(/{/g, '.code-markup_theme-some-theme {\n  ')
    .replace(/}/g, '\n}')
    .replace(/\"/g, '')
    .replace(/,/g, ';\n  ')
    .replace(/:/g, ': ');

  const codeComp = computed(() => bObj(props.code));

  const isCode = ref(false);
  const chIsCode = () => isCode.value = !isCode.value;
</script>

<style lang="scss">
  .watch-css {
    color: #fff;
    margin-top: 15px;
    background: var(--cm-bg);
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
      padding: 0 5px 0 5px;
    }
  }
</style>