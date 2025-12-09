<template>
  <code-markup
    :code="code"
    header="Slots example"
    v-bind="codeParam"
  >
    <template #default>

    </template>
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

  const code = ``;
</script>

<style lang="scss" scoped>

</style>