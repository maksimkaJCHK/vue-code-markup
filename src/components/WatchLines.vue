<template>
  <div
    class="watch-lines"
    :class="isHintClass"
  >
    <h3 @click="cIsHint">
      <slot name="header"></slot>
    </h3>

    <div
      v-if="isHint"
      class="watch-lines__hint"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const props = defineProps({
    isHint: {
      type: Boolean,
      default: false
    }
  });

  const isHint = ref(props.isHint);
  const cIsHint = () => isHint.value = !isHint.value;
  const isHintClass = computed(() => ({
    'watch-lines_isHint': isHint.value
  }));
</script>

<style lang="scss">
  .watch-lines {
    h3 {
      max-width: 100%;
      display: inline-block;
      box-sizing: border-box;
      cursor: pointer;
      position: relative;
      padding-right: 1em;
      user-select: none;
      margin-top: .2em;
      margin-bottom: .2em;

      &::after {
        top: 50%;
        right: 0;
        margin-top: -0.3em;
        content: ' ';
        display: block;
        position: absolute;
        border: .35em solid transparent;
        border-bottom-color: #000;
        transform-origin: 50% 70%;
      }
    }

    &_isHint {
      h3 {
        margin-bottom: .5em;

        &::after {
          transform: rotate(180deg);
        }
      }
    }
  }
</style>