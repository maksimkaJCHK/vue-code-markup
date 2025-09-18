<template>
  <div class="books-list-max-height">
    <books-list :line-count="10" />
  </div>
</template>

<script setup>
  import BooksList from './BooksList.vue';
</script>