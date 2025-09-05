<template>
  <main>
    <h1>Vue code markup</h1>

    <code-markup>
      
    </code-markup>
  </main>
</template>

<script setup>
  import CodeMarkup from '@/code-markup/codemarkup.vue';
</script>

<style lang="scss">
  main {
    h1 {
      font-size: 1.5em;
      line-height: 1.2;
      margin: 0 0 1em;
    }

    h2 {
      font-size: 1.3em;
      line-height: 1.2;
      margin: 1em 0;
    }

    p {
      line-height: 1.4;
      margin: 1em 0;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;

      &:hover {
        color: #535bf2;
      }
    }
  }
</style>
