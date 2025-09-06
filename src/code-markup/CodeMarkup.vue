<template>
  <div class="code-markup">
    <div
      v-if="props.header.length > 0"
      class="code-markup-header"
    >
      {{ props.header }}
    </div>

    <div class="code-markup-body">
      <div class="code-markup-wrap">
        <code-fake-line>
          <code-icon @click="copyCodeProps" />
        </code-fake-line>

        <slot></slot>

        <code-line>
          <mu-tag>
            {{'<'}}template{{'>'}}
          </mu-tag>
        </code-line>
        <code-line>
          <mu-tag>
            {{'<'}}span{{'>'}}
          </mu-tag>
        </code-line>
        <code-line>
          dddd
        </code-line>
        <code-line>
          dddd
        </code-line>
      </div>
    </div>
  </div>
</template>

<script setup>
  import copyCode from './copyCode';
  import CodeIcon from './components/CodeIcon.vue';

  import CodeFakeLine from './components/CodeFakeLine.vue';
  import CodeLine from './components/CodeLine.vue';
  
  import MuTag from './markup/MuTag.vue';

  const props = defineProps({
    header: {
      type: String,
      default: ''
    },
    code: {
      type: [String, Object],
      default: ''
    }
  });

  const copyCodeProps = () => copyCode(props.code);
</script>

<style lang="scss">
  :root {
    --cm-bg: #212122;
    --cm-border-radius: 5px;

    // Цвета
    $color-1: #ffc661;
    $color-2: #647f54;
    $color-3: #cc7832;
    $color-4: #985c64;
    $color-5: #985c64;
    $color-6: #d4d4c9;

    --cm-main-color: #a9b7c6;

    --cm-tag-color: #{$color-1};

    // Шрифт
    --cm-text-font-weight: bold;
    --cm-text-font-size: 1em;
    --cm-text-font-family: inherit;
    --cm-text-line-height: 1.4;

    // Иконка копировать текст
    --cm-icon-color: #fff;

    // Заголовок
    --cm-height-font-size: 1.1em;
    --cm-height-font-weight: bold;
  }

  .code-markup {
    border-radius: var(--cm-border-radius);
    background: var(--cm-bg);
    color: var(--cm-main-color);
    overflow: auto;
    font-weight: var(--cm-text-font-weight);
    font-size: var(--cm-text-font-size);
    font-family: var(--cm-text-font-family);
    line-height: var(--cm-text-line-height);

    &-header {
      padding: 1em;
      border-bottom: 1px solid grey;
      font-size: var(--cm-height-font-size);
      font-weight: var(--cm-height-font-weight);
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
