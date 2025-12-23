<template>
  <template-block>

    <code-line level-2>
      <mu-tag code='<div' />
    </code-line>

    <code-line
      level-3
      new
    >
      <mu-attr code='id=' />
      <mu-text code='"books-list"' />
    </code-line>
    <code-line
      level-3
      new
    >
      <mu-attr code='class=' />
      <mu-text code='"books-list"' />
    </code-line>

    <code-line level-2>
      <mu-tag code='>' />
    </code-line>

    <code-line
      level-3
      line-through
    >
      <mu-tag code="<h2>" />
      <mu-type code="Some text" />
      <mu-tag code="</h2>" />
    </code-line>

    <code-line level-3>
      <mu-tag code='<div' />
    </code-line>
    <code-line
      level-4
      changed
    >
      <mu-key-words code='v-for' />
      <mu-attr code='="book ' />
      <mu-key-words code='in' />
      <mu-attr code=' books"' />
    </code-line>
    <code-line
      level-4
      changed
    >
      <mu-attr code=':key="' />
      <mu-type code='book.' />
      <mu-key code='id' />
      <mu-attr code='"' />
    </code-line>
    <code-line
      level-4
      changed
    >
      <mu-attr code='class=' />
      <mu-text code='"books-list-item"' />
    </code-line>
    <code-line level-3>
      <mu-tag code='>' />
    </code-line>
    <code-line level-4>
      <mu-tag code='<h3>{' />
      <mu-tag code='{ ' />
      <mu-type code='book.' />
      <mu-key code="title " />
      <mu-tag code=' }}</h3>' />
    </code-line>
    <code-line
      level-4
      deleted
    >
      <mu-tag code="<div " />
      <mu-attr code="class=" />
      <mu-text code='"author"' />
      <mu-tag code=">" />
    </code-line>
    <code-line
      level-5
      deleted
    >
      <mu-tag code="{" />
      <mu-tag code="{ " />
      <mu-type code='book.' />
      <mu-key code="author " />
      <mu-tag code="}}" />
    </code-line>
    <code-line
      level-4
      deleted
    >
      <mu-tag code="</div>" />
    </code-line>
    <code-line
      level-4
      new
    >
      <mu-tag code="<div " />
      <mu-attr code="class=" />
      <mu-text code='"pages"' />
      <mu-tag code=">" />
    </code-line>
    <code-line
      level-5
      new
    >
      <mu-tag code="{" />
      <mu-tag code="{ " />
      <mu-type code='book.' />
      <mu-key code="pages " />
      <mu-tag code="}}" />
    </code-line>
    <code-line 
      level-4
      new
    >
      <mu-tag code="</div>" />
    </code-line>
    <code-line level-3>
      <mu-tag code='</div>' />
    </code-line>
    <code-line level-2>
      <mu-tag code='</div>'/>
    </code-line>

  </template-block>
</template>

<script setup>
  import TemplateBlock from '@/components/blocks/TemplateBlock.vue';
</script>

<style lang="scss" scoped>

</style>