<template>
  <code-markup
    :code="code"
    :is-header="false"
    :is-count="false"
    v-bind="codeParam"
  >
    <code-line>
      <mu-key-words code='npm' />
      <mu-tag code=" install " />
      <mu-text code="vue-code-markup" />
    </code-line>
  </code-markup>
</template>

<script setup>
  import useLang from '../useLang';

  const props = defineProps({
    lang: {
      type: String,
      default: 'en',
      validator(value) {
        return ['ru', 'en'].includes(value);
      }
    }
  });

  const { codeParam } = useLang(props);

  const code = 'npm install vue-code-markup';
</script>

<style lang="scss" scoped>

</style>