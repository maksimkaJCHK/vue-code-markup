<template>
  <code-markup
    header="ExampleComponent.vue"
    :code="code"
    v-bind="codeParam"
  >
    <template-block>

      <code-line level-2>
        <mu-tag code="<code-markup>" />
      </code-line>
      <code-line level-3>
        <mu-tag code="<code-line>" />
      </code-line>
      <code-line level-4>
        <mu-comment code="<!-- component content -->" />
      </code-line>
      <code-line level-3>
        <mu-tag code="</code-line>" />
      </code-line>
      <code-line level-2>
        <mu-tag code="</code-markup>" />
      </code-line>

    </template-block>

    <code-line />

    <script-block>

      <code-line level-2>
        <mu-key-words code="import" />
        <mu-type code=" { CodeMarkup, CodeLine } " />
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
  import useLang from '../useLang';

  import TemplateBlock from '@/components/blocks/TemplateBlock.vue';
  import ScriptBlock from '@/components/blocks/ScriptBlock.vue';

  const props = defineProps({
    lang: {
      type: String,
      default: 'en',
      validator(value) {
        return ['ru', 'en'].includes(value);
      }
    }
  });

  const { codeParam } = useLang(props);

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