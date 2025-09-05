<template>
  <div class="code-markup">
    <div
      v-if="props.header.length > 0"
      class="code-markup-header"
    >
      {{ props.header }}
    </div>

    <div class="code-markup-body">
      <code-icon @click="copyCodeProps" />

      <div class="code-markup-wrap">
        <slot></slot>
        <code-line></code-line>
        <code-line></code-line>
        <code-line></code-line>
      </div>
    </div>
  </div>
</template>

<script setup>
  import CodeIcon from './components/CodeIcon.vue';
  import CodeLine from './components/CodeLine.vue';
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
  }

  .code-markup {
    font-size: var(--cm-text-font-size);
    font-weight: var(--cm-text-font-weight);
    border-radius: var(--cm-border-radius);
    background: var(--cm-bg);
    color: var(--cm-text-color);
    overflow: auto;

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
