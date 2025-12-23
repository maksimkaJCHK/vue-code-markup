<template>
  <span
    v-if="props.code.length > 0"
    v-text="props.code"
    :class="[className]"
  ></span>

  <span
    v-else
    :class="[className]"
  >
    <slot></slot>
  </span>
</template>

<script setup>
  import useProps from '@/code-markup/markup/useProps.js';

  const { props } = useProps();

  const className = 'code-markup__style-param';
</script>

<style lang="scss">
  .code-markup__style-param {
    color: var(--cm-style-param);
  }
</style>
