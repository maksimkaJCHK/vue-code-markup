<template>
  <span
    v-if="props.code.length > 0"
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

  const { className } = useProps(props, 'code-markup__style-unit-mes');
</script>

<style lang="scss">
  .code-markup__style-unit-mes {
    color: var(--cm-style-unit-mes);
  }
</style>
