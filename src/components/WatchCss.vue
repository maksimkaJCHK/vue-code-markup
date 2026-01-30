<template>
  <div class="watch-css">
    <div class="watch-css__text">
      <template v-if="props.isRus">
        Посмотреть стили
      </template>
      <template v-if="!props.isRus">
        View styles
      </template>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps([
    'isRus',
    'code'
  ]);
</script>

<style lang="scss">
  .watch-css {
    color: #fff;
    background: var(--cm-bg);
    border-radius: 3px;

    &__text {
      padding: 10px;
      cursor: pointer;
    }
  }
</style>