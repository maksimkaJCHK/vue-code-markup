<template>
  <div
    class="code-markup"
    :class="mainClass"
  >
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
      :style="maxHeightStyle"
    >
      <div class="code-markup__wrap">
        <code-fake-line>
          <code-icon-block
            :is-copy="isCopy"
            :is-error="isError"
            :title="props.title"
            :successful-text="props.successfulText"
            :error-text="props.errorText"
            @click="copyCode"
          >
            <template 
              v-if="slots.error"
              #error
            >
              <render-error />
            </template>

            <template 
              v-if="slots.copy"
              #copy
            >
              <render-copy />
            </template>

            <template 
              v-if="slots.success"
              #success
            >
              <render-success />
            </template>
          </code-icon-block>
        </code-fake-line>

        <slot></slot>

        <code-fake-line />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, useSlots, h } from 'vue';

  import CodeIconBlock from './components/CodeIconBlock.vue';
  import CodeFakeLine from './components/CodeFakeLine.vue';

  import useCopy from './useCopy';

  const slots = useSlots();

  const renderError = () => h('div', slots.error());
  const renderCopy = () => h('div', slots.copy());
  const renderSuccess = () => h('div', slots.success());

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
    },
    lineCount: {
      type: [String, Number],
      default: 'auto'
    },
    title: {
      type: String,
      default: 'Copy code to clipboard'
    },
    successfulText: {
      type: String,
      default: 'The code is copied to the clipboard'
    },
    errorText: {
      type: String,
      default: 'An error occurred while copying the code to the clipboard'
    },
    theme: {
      type: String,
      default: 'darcula',
    }
  });

  const {
    isCopy,
    isError,
    copyCode
  } = useCopy(props.code);

  const bodyClass = computed(() => ({
    'code-markup_bold': props.textBold,
    'code-markup_count': props.isCount,
  }));

  const mainClass = computed(() => `code-markup_theme-${props.theme}`);

  const headerClass = computed(() => ({
    'code-markup__header': true,
    'code-markup_bold': props.headerBold
  }));

  const maxHeightStyle = computed(() => {
    const isAuto = props.lineCount === 'auto';
    const isNotVal = props.lineCount === null || props.lineCount === undefined;

    if (isAuto || isNotVal) return {};

    return {
      '--cm-max-height-body': `calc(var(--cm-text-line-height) * ${props.lineCount})`
    }
  });
</script>

<style lang="scss">
  @use '@/styles/_easing' as easing;
  @use '@/styles/_mixins' as mixins;

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
    --cm-text-line-height: 1.5em;
    --cm-count-padding: 0 .35em;

    // Максимальный размер блока с кодом
    --cm-max-height-body: auto;

    // Заголовок
    --cm-header-padding: .5em 1em;
    --cm-header-font-size: 1em;

    // Цвет заголовка
    --cm-header-color: #{$color-1};

    // Цвета текста по умолчанию.
    --cm-main-color: #{$color-8};

    // Цвет нового, изменённого, удалённого куска кода
    --cm-new-border: #60a802;
    --cm-changed-border: #6495ed;
    --cm-deleted-border: #92000a;

    --cm-deleted-opacity: .6;

    // Цвет номера строки
    --cm-count-bg: #5e5d5d;
    --cm-count-color: #fff;
    --cm-count-border-right: var(--cm-count-bg);

    // Цвета активной строки
    --cm-active-bg: #2a2a2b;
    --cm-active-count-bg: #454545;
    --cm-active-count-color: var(--cm-count-color);
    --cm-active-count-right-color: var(--cm-active-count-bg);

    // Цвет для тегов
    --cm-tag-color: #{$color-1};

    // Иконка копировать текст
    --cm-icon-color: #fff;
    --cm-icon-error-color: #980505;
    --cm-icon-is-copy-color: var(--cm-new-border);

    // Цвета для элементов внутри script
    --cm-text-color: #{$color-2};
    --cm-key-color: #{$color-4};
    --cm-key-words-color: #{$color-3};
    --cm-variable-color: #{$color-4};
    --cm-number-color: #{$color-6};
    --cm-comment-color: #{$color-7};
    --cm-attr-color: #{$color-5};
    --cm-style-class: #{$color-1};
    --cm-style-id: #{$color-1};
    --cm-style-tag: #{$color-1};
    --cm-style-key: #{$color-5};
    --cm-style-param: #{$color-4};
    --cm-style-unit-mes: #{$color-8};
    --cm-style-ampersand: #{$color-1};
    --cm-style-curly-brace: #{$color-1};
    --cm-function-color: #{$color-1};

    // Цвет выделения
    --cm-selection-bg: #{$color-2};
    --cm-selection-color: #fff;

    // Скролл
    --scroll-bar-bg: #{$color-9};
    --thumb-bg: #{$color-1};
  }

  .code-markup {
    @include mixins.styleScroll($scrollBarBg: var(--scroll-bar-bg), $thumbBg: var(--thumb-bg));

    --transition: .4s #{easing.$animationEffect} 0s;

    border-radius: var(--cm-border-radius);
    background: var(--cm-bg);
    color: var(--cm-main-color);
    overflow-y: hidden;
    overflow-x: auto;
    font-size: var(--cm-text-font-size);
    font-family: var(--cm-text-font-family);
    line-height: var(--cm-text-line-height);
    text-align: left;

    &::selection {
      background: var(--cm-selection-bg);
      color: var(--cm-selection-color);
    }

    &_line-through {
      text-decoration: line-through;
    }

    &_bold {
      font-weight: bold;
    }

    &_normal-text {
      font-weight: normal;
    }

    &__item {
      --transition: .4s #{easing.$animationEffect} 0s;

      opacity: 1;
      transition: opacity var(--transition), color var(--transition), font-weight var(--transition);
    }

    &_inactive {
      opacity: var(--cm-deleted-opacity);
    }

    &__header {
      padding: var(--cm-header-padding);
      color: var(--cm-header-color);
      border-bottom: 1px solid grey;
      font-size: var(--cm-header-font-size);
      text-overflow: ellipsis;
      overflow: hidden;
      transition: color var(--transition);
    }

    &__body {
      @include mixins.styleScroll($scrollBarBg: var(--scroll-bar-bg), $thumbBg: var(--thumb-bg));

      position: relative;
      overflow: auto;
      max-height: var(--cm-max-height-body);
    }

    &__wrap {
      width: 100%;
      display: table;
      counter-reset: count;
    }

    &_theme {
      &-monokai {
        $color-1: #272822;
        $color-2: #fff;
        $color-3: #8ce13d;
        $color-4: #e3d977;
        $color-5: #f12d53;
        $color-6: #c272d1;
        $color-7: #6495ed;

        --cm-bg: #{$color-1};
        --cm-main-color: #{$color-2};

        // Цвет нового, изменённого, удалённого куска кода
        --cm-new-border: #{$color-3};
        --cm-changed-border: #{$color-7};
        --cm-deleted-border: #{$color-5};

        // Цвет номера строки
        --cm-count-bg: #{$color-1};
        --cm-count-color: #8b9686;
        --cm-count-border-right: #3d3d31;

        // Цвета активной строки
        --cm-active-bg: #4a4a40;
        --cm-active-count-bg: var(--cm-count-bg);
        --cm-active-count-color: #c0c6ba;
        --cm-active-count-right-color: var(--cm-count-border-right);

        // Цвет для тегов
        --cm-tag-color: #{$color-5};

        // Цвет заголовка
        --cm-header-color: #{$color-4};

        // Цвета для элементов внутри script
        --cm-text-color: #{$color-4};
        --cm-key-color: #{$color-2};
        --cm-key-words-color: #{$color-5};
        --cm-variable-color: #{$color-2};
        --cm-number-color: #{$color-6};
        --cm-comment-color: #6f6d54;
        --cm-attr-color: #{$color-3};
        --cm-style-class: #{$color-3};
        --cm-style-id: #{$color-3};
        --cm-style-tag: #{$color-5};
        --cm-style-key: #{$color-3};
        --cm-style-param: #{$color-7};
        --cm-style-unit-mes: #{$color-5};
        --cm-style-ampersand: #{$color-5};
        --cm-style-curly-brace: #{$color-6};
        --cm-function-color: #{$color-3};

        // Цвет выделения
        --cm-selection-bg: #{$color-4};
        --cm-selection-color: #000;

        // Скролл
        --scroll-bar-bg: #{$color-1};
        --thumb-bg: #{$color-4};
      }
    }
  }
</style>
