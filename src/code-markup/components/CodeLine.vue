<template>
  <div
    class="code-markup__line"
    :class="classLine"
  >
    <div class="code-markup__line__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    new: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
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
    'code-markup__line_active': props.active,
    'code-markup__line_new': props.new,
    'code-markup_level-2': props['level2'],
    'code-markup_level-3': props['level3'],
    'code-markup_level-4': props['level4'],
    'code-markup_level-5': props['level5'],
    'code-markup_level-6': props['level6'],
    'code-markup_level-7': props['level7'],
    'code-markup_level-8': props['level8'],
    'code-markup_level-9': props['level9'],
    'code-markup_level-10': props['level10'],
    'code-markup_level-11': props['level11'],
    'code-markup_level-12': props['level12'],
  }));
</script>

<style lang="scss">
  .code-markup__line {
    height: 1em;
    display: table-row;
    white-space: nowrap;
    counter-increment: count;

    &__content {
      display: table-cell;
      padding-left: 10px;
      width: 100%;
    }

    .code-markup_count &::before {
      color: var(--cm-count-color);
      padding: var(--cm-count-padding);
      content: counter(count);
      display: table-cell;
      background: var(--cm-count-bg);
      position: sticky;
      user-select: none;
      left: 0;
      border-left: 4px solid var(--cm-count-bg);
      border-right: 4px solid var(--cm-count-bg);
    }

    &_active {
      background: var(--cm-active-bg);

      .code-markup_count &::before {
        background: var(--cm-active-count-bg);
        border-left-color: var(--cm-active-count-bg);
        border-right-color: var(--cm-active-count-bg);
      }
    }

    &_new {
      .code-markup_count &::before {
        border-right-color: #487e02;
      }
    }

    @for $i from 2 through 12 {
      .code-markup_level-#{$i} &__content {
        padding-left: #{$i}em;
      }
    }
  }
</style>
