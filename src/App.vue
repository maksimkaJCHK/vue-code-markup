<template>
  <header>
    <link-repository />
  </header>

  <main-content />

  <footer>
    <link-repository>
      {{ textRep }}
    </link-repository>
  </footer>
</template>

<script setup>
  import { ref } from 'vue';

  import MainContent from '@/components/MainContent.vue';
  import LinkRepository from '@/components/LinkRepository.vue';

  const textRep = ref('');
  const nameRep= 'Vue code markup repository';

  const cYear = 2025;
  const tYear = (new Date()).getFullYear();

  const bNameRep = (year=cYear) => `${nameRep} ${year}`;

  textRep.value = (tYear > cYear)
    ? bNameRep(`${cYear}-${tYear}`)
    : bNameRep();
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
  }

  main {
    flex: 1;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
</style>
