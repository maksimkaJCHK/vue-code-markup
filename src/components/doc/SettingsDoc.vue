<template>
  <div class="intro-doc">
    <template v-if="props.isRus">
      <h2>
        Пример настройки
      </h2>

    </template>

    <template v-if="!props.isRus">
      <h2>
        Configuration example
      </h2>
    </template>
  </div>
</template>

<script setup>
  import BooksList from '@/components/code-examples/books/BooksList.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });
</script>

<style lang="scss" scoped>

</style>