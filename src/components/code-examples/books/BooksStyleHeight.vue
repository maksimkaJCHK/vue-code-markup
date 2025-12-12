<template>
  <div class="books-style-max-height">
    <books-list :lang="props.lang" />
  </div>
</template>

<script setup>
  import BooksList from './BooksList.vue';

  const props = defineProps({
    lang: {
      type: String,
      default: 'en',
      validator(value) {
        return ['ru', 'en'].includes(value)
      }
    }
  });
</script>

<style lang="scss" scoped>
  .books-style-max-height {
    --cm-max-height-body: 200px;
  }
</style>