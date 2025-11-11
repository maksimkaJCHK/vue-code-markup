<template>
  <code-line>
    <mu-tag code="<script " />
    <mu-attr code="setup" />
    <mu-tag code=">" />
  </code-line>

  <slot />

  <code-line>
    <mu-tag code="</script>" />
  </code-line>
</template>
