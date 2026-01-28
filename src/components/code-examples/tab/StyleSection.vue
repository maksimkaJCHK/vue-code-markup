<template>
  <!-- Стили -->
  <style-block>
    <code-line
      level-2
      new
    >
      <mu-style-id code="#books-list" />
      <mu-style-curly-brace code=" {" />
    </code-line>
    <code-line
      level-3
      new
    >
      <mu-style-param code="margin" />:
      <mu-number code=" 1" />
      <mu-style-unit-meas code="em" />
      <mu-number code=" 0 " />
      <mu-number code="2.5" />
      <mu-style-unit-meas code="em" />;
    </code-line>
    <code-line
      level-2
      new
    >
      <mu-style-curly-brace code="}" />
    </code-line>

    <code-line />

    <code-line level-2>
      <mu-style-class code=".books-list" />
      <mu-style-curly-brace code=" {" />
    </code-line>

    <code-line
      level-3
      active
    >
      <mu-style-param code="line-height" />:
      <mu-number code=" 1.2" />;
    </code-line>

    <code-line />

    <code-line level-3>
      <mu-style-tag code="h3" />
      <mu-style-curly-brace code=" {" />
    </code-line>
    <code-line
      level-4
      changed
    >
      <mu-style-param code="font-size" />:
      <mu-number code="1.2" />
      <mu-style-unit-meas code="em" />;
    </code-line>
    <code-line
      level-4
      changed
    >
      <mu-style-param code="margin" />:
      <mu-number code=".4" />
      <mu-style-unit-meas code="em" />
      <mu-number code=" 0 " />
      <mu-number code=".3" />
      <mu-style-unit-meas code="em" />;
    </code-line>
    <code-line level-3>
      <mu-style-curly-brace code="}" />
    </code-line>

    <code-line />

    <code-line level-3 deleted>
      <mu-style-ampersand code="&" />
      <mu-style-key code="-item" />
      <mu-style-curly-brace code=" {" />
    </code-line>
    <code-line level-4 deleted>
      <mu-style-param code="margin" />:
      <mu-number code="1.5" />
      <mu-style-unit-meas code="em" />
      <mu-number code=" 0 " />;
    </code-line>
    <code-line level-3 deleted>
      <mu-style-curly-brace code="}" />
    </code-line>

    <code-line level-2>
      <mu-style-curly-brace code="}" />
    </code-line>
  </style-block>
</template>

<script setup>
  import StyleBlock from '@/components/blocks/StyleBlock.vue';
</script>

<style lang="scss" scoped>

</style>