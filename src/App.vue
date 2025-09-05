<template>
  <header>
    Vue code markup
  </header>

  <main-content />

  <footer>
    <a
      href="https://github.com/maksimkaJCHK/vue-code-markup"
      target="_blank"
      title="Vue code markup repository"
    >Vue code markup</a>
  </footer>
</template>

<script setup>
  import MainContent from '@/components/MainContent.vue';
</script>

<style lang="scss">
  #app {
    max-width: 980px;
    margin: 0 auto;
    min-height: 100%;
    background: #fff;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  }

  header,
  footer,
  main {
    padding-left: 1rem;
    padding-right: 1rem;
    box-sizing: border-box;

    &::selection {
      color: #fff;
      background: #158cba;
    }
  }

  header,
  footer {
    background: linear-gradient(#f2f2f2, #eee 50%, #dbdbdb);
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
  }

  header {
    top: 0;
    position: sticky;
    z-index: 10;
    padding-top: 1rem;
    height: 56px;
  }

  footer {
    padding-top: .6rem;
    height: 42px;
    font-size: .8rem;

    a {
      color: #000;
      display: inline-block;
      text-decoration: underline;
      background: url('./assets/github-mark.png') no-repeat 0 50%;
      background-size: 16px auto;
      padding-left: 25px;

      &:hover {
        color: #000;
        text-decoration: none;
      }
    }
  }

  main {
    flex: 1;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
</style>
