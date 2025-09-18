<template>
  <!-- Стили -->
  <code-line>
    <mu-tag code="<style " />
    <mu-attr code="lang=" />
    <mu-text code='"scss"' />
    <mu-attr code=" scoped" />
    <mu-tag code=">" />
  </code-line>

  <code-line level-2>
    <mu-style-class code=".books-list {" />
  </code-line>

  <code-line
    level-3
    active
  >
    <mu-style-param code="line-height" />:
    <mu-number code=" 1.2" />;
  </code-line>
  <code-line level-3>
    <mu-style-param code="margin" />:
    <mu-number code=" 1" />
    <mu-style-unit-meas code="em" />
    <mu-number code=" 0 " />
    <mu-number code="2.5" />
    <mu-style-unit-meas code="em" />;
  </code-line>

  <code-line />

  <code-line
    level-3
    new
  >
    <mu-style-tag code="h3 {" />
  </code-line>
  <code-line
    level-4
    new
  >
    <mu-style-param code="font-size" />:
    <mu-number code="1.2" />
    <mu-style-unit-meas code="em" />;
  </code-line>
  <code-line
    level-4
    new
  >
    <mu-style-param code="margin" />:
    <mu-number code=".4" />
    <mu-style-unit-meas code="em" />
    <mu-number code=" 0 " />
    <mu-number code=".3" />
    <mu-style-unit-meas code="em" />;
  </code-line>
  <code-line
    level-3
    new
  >
    <mu-style-tag code="}" />
  </code-line>

  <code-line />

  <code-line level-3>
    <mu-style-ampersand code="&" />
    <mu-style-key code="-item" />
    <mu-style-curly-brace code=" {" />
  </code-line>
  <code-line level-4>
    <mu-style-param code="margin" />:
    <mu-number code="1.5" />
    <mu-style-unit-meas code="em" />
    <mu-number code=" 0 " />;
  </code-line>
  <code-line level-3>
    <mu-style-curly-brace code="}" />
  </code-line>

  <code-line level-2>
    <mu-style-class code="}" />
  </code-line>
  <code-line>
    <mu-tag code="</style>" />
  </code-line>
</template>

<script setup>
  import CodeLine from '@/code-markup/components/CodeLine.vue';

  // Для шаблона
  import MuTag from '@/code-markup/markup/template/MuTag.vue';
  import MuAttr from '@/code-markup/markup/template/MuAttr.vue';
  // Общие
  import MuText from '@/code-markup/markup/MuText.vue';
  import MuNumber from '@/code-markup/markup/MuNumber.vue';
  // Для блока стилей
  import MuStyleClass from '@/code-markup/markup/style/MuStyleClass.vue';
  import MuStyleTag from '@/code-markup/markup/style/MuStyleTag.vue';
  import MuStyleKey from '@/code-markup/markup/style/MuStyleKey.vue';
  import MuStyleParam from '@/code-markup/markup/style/MuStyleParam.vue';
  import MuStyleUnitMeas from '@/code-markup/markup/style/MuStyleUnitMeas.vue';
  import MuStyleAmpersand from '@/code-markup/markup/style/MuStyleAmpersand.vue';
  import MuStyleCurlyBrace from '@/code-markup/markup/style/MuStyleCurlyBrace.vue';
</script>

<style lang="scss" scoped>

</style>