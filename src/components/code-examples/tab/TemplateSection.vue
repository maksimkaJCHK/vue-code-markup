<template>
  <code-line>
    <mu-tag code="<template>" />
  </code-line>

  <code-line level-2>
    <mu-tag code='<div' />
  </code-line>

  <code-line level-3>
    <mu-attr code='id=' />
    <mu-text code='"books-list"' />
  </code-line>
  <code-line level-3>
    <mu-attr code='class=' />
    <mu-text code='"books-list"' />
  </code-line>

  <code-line level-2>
    <mu-tag code='>' />
  </code-line>

  <code-line level-3>
    <mu-tag code='<div' />
  </code-line>
  <code-line
    level-4
    active
  >
    <mu-key-words code='v-for' />
    <mu-attr code='="book ' />
    <mu-key-words code='in' />
    <mu-attr code=' books"' />
  </code-line>
  <code-line level-4>
    <mu-attr code=':key="' />
    book.
    <mu-key code='id' />
    <mu-attr code='"' />
  </code-line>
  <code-line
    level-4
    active
    new
  >
    <mu-attr code='class=' />
    <mu-text code='"books-list-item"' />
  </code-line>
  <code-line
    level-3
    new
  >
    <mu-tag code='>' />
  </code-line>
  <code-line
    level-4
    new
  >
    <mu-tag code='<h3>{' />
    <mu-tag code='{ ' />
    book.<mu-key code="title " />
    <mu-tag code=' }}</h3>' />
  </code-line>
  <code-line
    level-4
    new
  >
    <mu-tag code="<div " />
    <mu-attr code="class=" />
    <mu-text code='"author"' />
    <mu-tag code=">" />
  </code-line>
  <code-line
    level-5
    new
  >
    <mu-tag code="{" />
    <mu-tag code="{ " />
    book.<mu-key code="author " />
    <mu-tag code="}}" />
  </code-line>
  <code-line
    level-4
    new
  >
    <mu-tag code="</div>" />
  </code-line>
  <code-line level-4>
    <mu-tag code="<div " />
    <mu-attr code="class=" />
    <mu-text code='"pages"' />
    <mu-tag code=">" />
  </code-line>
  <code-line level-5>
    <mu-tag code="{" />
    <mu-tag code="{ " />
    book.<mu-key code="pages " />
    <mu-tag code="}}" />
  </code-line>
  <code-line level-4>
    <mu-tag code="</div>" />
  </code-line>
  <code-line level-3>
    <mu-tag code='</div>' />
  </code-line>
  <code-line level-2>
    <mu-tag code='</div>'/>
  </code-line>

  <code-line>
    <mu-tag code="</template>" />
  </code-line>
</template>

<script setup>
  // import {
  //   CodeLine,
  //   MuTag,
  //   MuAttr,
  //   MuText,
  //   MuKey,
  //   MuKeyWords,
  // } from '@/code-markUp/';
</script>

<style lang="scss" scoped>

</style>