<template>
  <a
    href="https://github.com/maksimkaJCHK/vue-code-markup"
    target="_blank"
    title="Vue code markup repository"
    class="repository"
  >
    <slot>Vue code markup repository</slot>
  </a>
</template>

<script setup>

  
</script>

<style lang="scss">
  .repository {
    display: inline-block;
    text-decoration: none;
    background: url('@/assets/github-mark.png') no-repeat 0 50%;
    background-size: 18px auto;
    line-height: 160%;
    padding-left: 25px;

    &,
    &:hover {
      color: #000;
    }

    header & {
      padding-left: 30px;
      background-size: 22px auto;
    }
  }
</style>
