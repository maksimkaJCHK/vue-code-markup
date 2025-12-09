<template>
  <code-line level-3>
    <mu-tag code="<template " />
    <mu-attr :code="`#${ props.type }`" />
    <mu-tag code=">" />
  </code-line>

  <code-line level-4>
    <slot />
  </code-line>

  <code-line level-3>
    <mu-tag code="</template>" />
  </code-line>
</template>

<script setup>
  const props = defineProps(['type']);
</script>
