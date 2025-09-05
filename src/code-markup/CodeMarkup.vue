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

      </div>
    </div>
  </div>
</template>

<script setup>
  import CodeIcon from './components/CodeIcon.vue';
  import CodeLine from './components/CodeLine.vue';
  import CodeFakeLine from './components/CodeFakeLine.vue';
  import copyCode from './copyCode';

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
    --cm-text-color: #a9b7c6;

    // Шрифт
    --cm-text-font-weight: bold;
    --cm-text-font-size: 1em;

    // Иконка копировать текст
    --cm-icon-color: #fff;

    // Заголовок
    --cm-height-font-size: 1.1em;
    --cm-height-font-weight: bold;
  }

  .code-markup {
    font-size: var(--cm-text-font-size);
    font-weight: var(--cm-text-font-weight);
    border-radius: var(--cm-border-radius);
    background: var(--cm-bg);
    color: var(--cm-text-color);
    overflow: auto;

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
