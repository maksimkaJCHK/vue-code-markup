<template>
  <code-line>
    <mu-tag code="<style " />
    <mu-attr code="lang=" />
    <mu-text code='"scss"' />
    <mu-attr code=" scoped" />
    <mu-tag code=">" />
  </code-line>

  <slot />

  <code-line>
    <mu-tag code="</style>" />
  </code-line>
</template>
