<template>
  <div class="books-list-max-height">
    <p>
      <strong>:line-count="10"</strong>
    </p>
    <books-list :line-count="10" />
    <p>
      <strong>:line-count="15"</strong>
    </p>
    <books-list :line-count="15" />
    <p>
      <strong>:line-count="20"</strong>
    </p>
    <books-list :line-count="20" />
  </div>
</template>

<script setup>
  import BooksList from './BooksList.vue';
</script>