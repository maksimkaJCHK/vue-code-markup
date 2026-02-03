<template>
  <code-line level-2>
    <mu-style-param :code="props.keyProps" />
    <mu-type code=": " />
    <mu-number :code="props.valueProps" />
    <mu-type code=";" />
  </code-line>
</template>

<script setup>
  const props = defineProps([
    'keyProps',
    'valueProps',
  ]);
</script>

<style lang="scss">

</style>