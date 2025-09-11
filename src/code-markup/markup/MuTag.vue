<template>
  <span
    v-if="props.code.length"
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

  const className = 'code-markup__tag';
</script>

<style lang="scss">
  .code-markup__tag {
    color: var(--cm-tag-color);
  }
</style>
