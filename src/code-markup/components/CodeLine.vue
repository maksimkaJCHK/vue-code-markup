<template>
  <div
    class="code-markup-line"
    :class="classLine"
  >
    <div class="code-markup-line-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    'level-2': {
      type: Boolean,
      default: false
    },
    'level-3': {
      type: Boolean,
      default: false
    },
    'level-4': {
      type: Boolean,
      default: false
    },
    'level-5': {
      type: Boolean,
      default: false
    },
    'level-6': {
      type: Boolean,
      default: false
    },
    'level-7': {
      type: Boolean,
      default: false
    },
    'level-8': {
      type: Boolean,
      default: false
    },
  });

  const classLine = computed(() => ({
    'code-markup-line-level-2': props['level2'],
    'code-markup-line-level-3': props['level3'],
    'code-markup-line-level-4': props['level4'],
    'code-markup-line-level-5': props['level5'],
    'code-markup-line-level-6': props['level6'],
    'code-markup-line-level-7': props['level7'],
    'code-markup-line-level-8': props['level8'],
    'code-markup-line-level-9': props['level9'],
    'code-markup-line-level-10': props['level10'],
    'code-markup-line-level-11': props['level11'],
    'code-markup-line-level-12': props['level12'],
  }));
</script>

<style lang="scss">
  .code-markup-line {
    height: 1em;
    display: table-row;
    white-space: nowrap;
    counter-increment: count;

    &-content {
      display: table-cell;
      padding-left: 10px;
      width: 100%;
    }

    .code-markup-count &::before {
      color: #fff;
      padding-left: 7px;
      padding-right: 7px;
      content: counter(count);
      display: table-cell;
      background: grey;
      position: sticky;
      left: 0;
    }

    @for $i from 2 through 12 {
      &-level-#{$i} &-content {
        padding-left: #{$i * 10}px;
      }
    }
  }
</style>
