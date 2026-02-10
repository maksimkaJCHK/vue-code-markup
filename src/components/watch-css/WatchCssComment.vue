<template>
  <code-line />

  <code-line level-2>
    <mu-comment :code="`/* ${props.code} */`" />
  </code-line>
</template>

<script setup>
  const props = defineProps(['code']);
</script>