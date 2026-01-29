<template>
  <main>
    <select-lang
      :lang="lang"
      @change-lang="cLang"
    />

    <h1>Vue code markup</h1>

    <template v-if="lang === 'rus'">
      <intro-doc is-rus />
      <install-doc is-rus />
      <main-comp-doc is-rus />
      <code-markup-doc is-rus />
      <code-line-doc is-rus />
      <mark-up-doc is-rus />
      <com-doc is-rus />
      <temp-doc is-rus />
      <script-doc is-rus />
      <style-doc is-rus />
      <slots-doc is-rus />
      <stilization-doc is-rus />
      <exam-doc is-rus />
    </template>

    <template v-else>
      <intro-doc />
      <install-doc />
      <main-comp-doc />
      <code-markup-doc />
      <code-line-doc />
      <mark-up-doc />
      <com-doc />
      <temp-doc />
      <script-doc />
      <style-doc />
      <slots-doc />
      <stilization-doc />
      <exam-doc />
    </template>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  import SelectLang from '@/components/SelectLang.vue';
  import IntroDoc from '@/components/doc/IntroDoc.vue';
  import InstallDoc from '@/components/doc/InstallDoc.vue';
  import MainCompDoc from '@/components/doc/MainCompDoc.vue';
  import CodeMarkupDoc from '@/components/doc/CodeMarkupDoc.vue';
  import CodeLineDoc from '@/components/doc/CodeLineDoc.vue';
  import MarkUpDoc from '@/components/doc/MarkUpDoc.vue';
  import ComDoc from '@/components/doc/ComDoc.vue';
  import TempDoc from '@/components/doc/TempDoc.vue';
  import ScriptDoc from '@/components/doc/ScriptDoc.vue';
  import StyleDoc from '@/components/doc/StyleDoc.vue';
  import SlotsDoc from '@/components/doc/SlotsDoc.vue';
  import ExamDoc from '@/components/doc/ExamDoc.vue';
  import StilizationDoc from '@/components/doc/StilizationDoc.vue';

  const lang = ref('rus');

  const cLang = (v) => {
    lang.value = v;

    window.location.hash = (v === 'rus') ? v : '';
  }

  const identLang = () => lang.value = (window.location.hash === '#rus') ? 'rus' : 'eng';
  identLang();
</script>

<style lang="scss">
  main {
    @media screen and (max-width: 700px) {
      font-size: .9em;
    }

    @media screen and (max-width: 500px) {
      font-size: .8em;
    }

    @media screen and (max-width: 400px) {
      font-size: .75em;
    }

    h1 {
      font-size: 1.5em;
      line-height: 1.2;
      margin: .5em 0 .7em;
    }

    h2 {
      font-size: 1.3em;
      line-height: 1.2;
      margin: 1.3em 0 .5em;
    }

    h3 {
      font-size: 1.2em;
      line-height: 1.2;
      margin: 1.3em 0 .5em;
    }

    p {
      line-height: 1.4;
      margin: .5em 0 1em;
    }

    a {
      color: var(--link-color);
      text-decoration: underline;

      &:hover {
        color: var(--link-hover-color);
        text-decoration: none;
      }
    }

    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;

      li {
        &::before {
          content: '—';
          margin: 0 10px 0 5px;
        }
      }
    }

    .code-markup {
      margin: 1em 0;
    }
  }
</style>
