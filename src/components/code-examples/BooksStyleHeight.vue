<template>
  <p>
    <b>--cm-max-height-body: 200px;</b>
  </p>
  <div class="books-style-max-height">
    <books-list />
  </div>
</template>

<script setup>
  import BooksList from './BooksList.vue';
</script>

<style lang="scss" scoped>
  .books-style-max-height {
    --cm-max-height-body: 200px;
  }
</style>