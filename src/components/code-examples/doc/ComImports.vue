<template>
  <code-markup
    header="ExampleComponent.vue"
    :code="code"
    v-bind="props.codeParam"
  >
    <template-block>

      <code-line level-2>
        <mu-tag code="<code-markup>" />
      </code-line>

      <slot name="default"></slot>

      <code-line level-2>
        <mu-tag code="</code-markup>" />
      </code-line>

    </template-block>

    <code-line />

    <script-block>

      <code-line level-2>
        <mu-key-words code="import" />
        <mu-type code=" { " />
      </code-line>

      <code-line level-3>
        <mu-type code="CodeMarkup," />
      </code-line>

      <code-line level-3>
        <mu-type code="CodeLine," />
      </code-line>

      <code-line
        v-for="item in props.compArr"
        :key="item"
        level-3
        new
      >
        <mu-type :code="`${item},`" />
      </code-line>

      <code-line level-2>
        <mu-type code=" } " />
        <mu-key-words code="from" />
        <mu-text code=" 'vue-code-markup'" />
        <mu-type code=";" />
      </code-line>

      <code-line level-2>
        <mu-key-words code="import" />
        <mu-text code=" 'vue-code-markup/lib/style.css'" />
        <mu-type code=";" />
      </code-line>

    </script-block>
  </code-markup>
</template>

<script setup>
  import TemplateBlock from '@/components/blocks/TemplateBlock.vue';
  import ScriptBlock from '@/components/blocks/ScriptBlock.vue';

  const props = defineProps(['codeParam', 'compArr']);

  const code = `<template>
  <code-markup>
    <code-line>
      <!-- component content -->
    </code-line>
  </code-markup>
</template>

<script setup>
  import { CodeMarkup, CodeLine } from 'vue-code-markup';
  import 'vue-code-markup/lib/style.css';
</${'script'}>`;
</script>

<style lang="scss" scoped>

</style>