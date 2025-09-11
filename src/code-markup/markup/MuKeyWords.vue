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

  const className = 'code-markup__key-words';
</script>

<style lang="scss">
  .code-markup__key-words {
    color: var(--cm-key-words-color);
  }
</style>
