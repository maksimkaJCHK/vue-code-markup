<template>
  <div class="books-list-max-height">
    <books-list />
  </div>
</template>

<script setup>
  import BooksList from './BooksList.vue';
</script>

<style lang="scss" scoped>
  .books-list-max-height {
    --cm-max-height-body: 250px;
  }
</style>