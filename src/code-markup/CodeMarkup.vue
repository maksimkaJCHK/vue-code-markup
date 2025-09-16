<template>
  <div class="code-markup">
    <template v-if="props.isHeader">
      <div
        v-if="props.header.length > 0"
        :class="headerClass"
        :title="props.header"
      >
        {{ props.header }}
      </div>

      <div
        v-else
        :class="headerClass"
      >
        <slot name="header"></slot>
      </div>
    </template>

    <div
      class="code-markup__body"
      :class="bodyClass"
    >
      <div class="code-markup__wrap">
        <code-fake-line>
          <code-icon @click="copyCodeProps" />
        </code-fake-line>

        <slot></slot>

        <code-fake-line />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  import copyCode from './copyCode';
  import CodeIcon from './components/CodeIcon.vue';
  import CodeFakeLine from './components/CodeFakeLine.vue';

  const props = defineProps({
    header: {
      type: String,
      default: ''
    },
    code: {
      type: [String, Object],
      default: ''
    },
    textBold: {
      type: Boolean,
      default: false
    },
    headerBold: {
      type: Boolean,
      default: false
    },
    isHeader: {
      type: Boolean,
      default: true
    },
    isCount: {
      type: Boolean,
      default: true
    }
  });

  const copyCodeProps = () => copyCode(props.code);

  const bodyClass = computed(() => ({
    'code-markup_bold': props.textBold,
    'code-markup_count': props.isCount,
  }));

  const headerClass = computed(() => ({
    'code-markup__header': true,
    'code-markup_bold': props.headerBold
  }));
</script>

<style lang="scss">
  @mixin styleScroll($scrollBarBg: #000, $thumbBg: #FFA500, $scrollBarBR: 5px, $scrollBarType: thin, $scrollBarWidth: 6px) {
    scrollbar-width: $scrollBarType;
    scrollbar-color: $thumbBg $scrollBarBg;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: $scrollBarWidth;
      background: $scrollBarBg;
      border-radius: $scrollBarBR;
    }

    &::-webkit-scrollbar-track {
      background: $scrollBarBg;
      border-radius: $scrollBarBR;
    }

    &::-webkit-scrollbar-thumb {
      background: $thumbBg;
      border-radius: $scrollBarBR;
    }
  }

  // Цвета
  $color-1: #ffc661;
  $color-2: #647f54;
  $color-3: #cc7832;
  $color-4: #9876aa;
  $color-5: #d4d4c9;
  $color-6: #6897bb;
  $color-7: #808080;
  $color-8: #a9b7c6;
  $color-9: #212122;

  :root {
    --cm-bg: #{$color-9};
    --cm-border-radius: 5px;

    // Шрифт
    --cm-text-font-size: 1em;
    --cm-text-font-family: inherit;
    --cm-text-line-height: 1.4em;
    --cm-count-padding: 0 .6em;

    // Максимальный размер блока с кодом
    --cm-max-height-body: auto;

    // Иконка копировать текст
    --cm-icon-color: #fff;

    // Заголовок
    --cm-header-padding: .5em 1em;
    --cm-header-font-size: 1em;

    // Цвет заголовка
    --cm-header-color: #{$color-1};

    // Цвета текста по умолчани.
    --cm-main-color: #{$color-8};

    // Цвета активной строки
    --cm-active-bg: #2a2a2b;
    --cm-active-count-bg: #454545;

    // Цвет номера строки
    --cm-count-bg: #5e5d5d;
    --cm-count-color: #fff;

    // Цвет для тегов
    --cm-tag-color: #{$color-1};

    // Цвета для элементов внутри script
    --cm-text-color: #{$color-2};
    --cm-key-color: #{$color-4};
    --cm-key-words-color: #{$color-3};
    --cm-variable-color: #{$color-4};
    --cm-number-color: #{$color-6};
    --cm-comment-color: #{$color-7};
    --cm-attr-color: #{$color-5};
    --cm-style-class: #{$color-1};
    --cm-style-tag: #{$color-1};
    --cm-style-key: #{$color-5};
    --cm-style-param: #{$color-4};
    --cm-style-unit-mes: #{$color-8};
    --cm-style-ampersand: #{$color-1};
    --cm-style-curly-brace: #{$color-1};

    // Цвет выделения
    --cm-selection-bg: #{$color-2};
    --cm-selection-color: #fff;
  }

  .code-markup {
    @include styleScroll($scrollBarBg: $color-9, $thumbBg: $color-1);

    border-radius: var(--cm-border-radius);
    background: var(--cm-bg);
    color: var(--cm-main-color);
    overflow-y: hidden;
    overflow-x: auto;
    font-size: var(--cm-text-font-size);
    font-family: var(--cm-text-font-family);
    line-height: var(--cm-text-line-height);

    &::selection {
      background: var(--cm-selection-bg);
      color: var(--cm-selection-color);
    }

    &_bold {
      font-weight: bold;
    }

    &__header {
      padding: var(--cm-header-padding);
      color: var(--cm-header-color);
      border-bottom: 1px solid grey;
      font-size: var(--cm-header-font-size);
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &__body {
      @include styleScroll($scrollBarBg: $color-9, $thumbBg: $color-1);
      position: relative;
      overflow: auto;
      max-height: var(--cm-max-height-body);
    }

    &__wrap {
      width: 100%;
      display: table;
      counter-reset: count;
    }
  }
</style>
