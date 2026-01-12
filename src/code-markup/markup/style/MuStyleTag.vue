<template>
  <span
    v-if="code.length > 0"
    v-text="code"
    :class="className"
  ></span>

  <span
    v-else
    :class="className"
  >
    <slot></slot>
  </span>
</template>

<script>
  import { defineComponent } from 'vue';
  import mixin from '@/code-markup/markup/mixin.js';

  export default defineComponent({
    data() {
      return {
        classComp: 'code-markup__style-tag'
      }
    },
    mixins: [mixin]
  });
</script>

<style lang="scss">
  .code-markup__style-tag {
    color: var(--cm-style-tag);
  }
</style>
