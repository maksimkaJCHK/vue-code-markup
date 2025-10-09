<template>
  <div class="books-line-count">
    <p>
      <strong>:line-count="10"</strong>
    </p>
    <books-list 
      :line-count="10"
      :lang="props.lang"
    />
    <p>
      <strong>:line-count="15"</strong>
    </p>
    <books-list 
      :line-count="15"
      :lang="props.lang"
    />
    <p>
      <strong>:line-count="20"</strong>
    </p>
    <books-list 
      :line-count="20"
      :lang="props.lang"
    />
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