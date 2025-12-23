<template>
  <span
    v-if="props.code.length"
    v-text="props.code"
    :class="className"
  ></span>

  <span
    v-else
    :class="className"
  >
    <slot></slot>
  </span>
</template>

<script setup>
  import useProps from '@/code-markup/markup/useProps.js';

  const props = defineProps({
    code: {
      type: String,
      default: ''
    },
    lineThrough: {
      type: Boolean,
      default: false
    },
  });

  const { className } = useProps(props, 'code-markup__tag');
</script>

<style lang="scss">
  .code-markup__tag {
    color: var(--cm-tag-color);
  }
</style>
