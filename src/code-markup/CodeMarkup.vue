<template>
  <div class="code-markup">
    <template v-if="props.isHeader">
      <div
        v-if="props.header.length > 0"
        :class="headerClass"
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
      class="code-markup-body"
      :class="bodyClass"
    >
      <div class="code-markup-wrap">
        <code-fake-line>
          <code-icon @click="copyCodeProps" />
        </code-fake-line>

        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  import copyCode from './copyCode';
  import CodeIcon from './components/CodeIcon.vue';

  import CodeFakeLine from './components/CodeFakeLine.vue';
  import CodeLine from './components/CodeLine.vue';

  import MuTag from './markup/MuTag.vue';
  import MuImport from './markup/MuImport.vue';
  import MuFrom from './markup/MuFrom.vue';
  import MuText from './markup/MuText.vue';
  import MuKey from './markup/MuKey.vue';
  import MuKeyWords from './markup/MuKeyWords.vue';
  import MuVariable from './markup/MuVariable.vue';
  import MuNumber from './markup/MuNumber.vue';
  import MuComment from './markup/MuComment.vue';

  const props = defineProps({
    header: {
      type: String,
      default: ''
    },
    code: {
      type: [String, Object],
      default: ''
    },
    boldText: {
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
    'code-markup-bold': props.boldText,
    'code-markup-count': props.isCount,
  }));

  const headerClass = computed(() => ({
    'code-markup-header': true,
    'code-markup-bold': props.headerBold
  }));
</script>

<style lang="scss">
  :root {
    --cm-bg: #212122;
    --cm-border-radius: 5px;

    // Шрифт
    --cm-text-font-size: 1em;
    --cm-text-font-family: inherit;
    --cm-text-line-height: 1.4;

    // Иконка копировать текст
    --cm-icon-color: #fff;

    // Заголовок
    --cm-header-padding: .5em 1em;
    --cm-height-font-size: 1em;

    // Цвета
    $color-1: #ffc661;
    $color-2: #647f54;
    $color-3: #cc7832;
    $color-4: #9876aa;
    $color-5: #d4d4c9;
    $color-6: #6897bb;
    $color-7: #808080;

    // Цвета текста по умолчани.
    --cm-main-color: #a9b7c6;

    // Цвет заголовка
    --cm-header-color: #{$color-1};

    // Цвет для тегов
    --cm-tag-color: #{$color-1};

    // Цвета для элементов внутри script
    --cm-import-color: #{$color-3};
    --cm-from-color: #{$color-3};
    --cm-text-color: #{$color-2};
    --cm-key-color: #{$color-4};
    --cm-key-words-color: #{$color-3};
    --cm-variable-color: #{$color-4};
    --cm-number-color: #{$color-6};
    --cm-comment-color: #{$color-7};
  }

  .code-markup {
    border-radius: var(--cm-border-radius);
    background: var(--cm-bg);
    color: var(--cm-main-color);
    overflow: auto;
    font-size: var(--cm-text-font-size);
    font-family: var(--cm-text-font-family);
    line-height: var(--cm-text-line-height);

    &-bold {
      font-weight: bold;
    }

    &-header {
      padding: var(--cm-header-padding);
      color: var(--cm-header-color);
      border-bottom: 1px solid grey;
      font-size: var(--cm-height-font-size);
    }

    &-body {
      position: relative;
      min-height: 2em;
    }

    &-wrap {
      width: 100%;
      display: table;
      counter-reset: count;
    }
  }
</style>
