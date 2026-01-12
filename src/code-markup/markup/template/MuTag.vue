<template>
  <span
    v-if="code.length"
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
        classComp: 'code-markup__tag'
      }
    },
    mixins: [mixin]
  });
</script>

<style lang="scss">
  .code-markup__tag {
    color: var(--cm-tag-color);
  }
</style>
