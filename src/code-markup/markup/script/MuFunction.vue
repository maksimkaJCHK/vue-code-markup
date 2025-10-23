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
  const props = defineProps({
    code: {
      type: String,
      default: ''
    }
  });

  const className = 'code-markup__function';
</script>

<style lang="scss">
  .code-markup__function {
    color: var(--cm-function-color);
  }
</style>
