<template>
  <code-markup
    :code="code"
    :is-header="false"
    v-bind="codeParam"
  >
    <template-block>
      <code-line level-2>
        <mu-tag
          bold
          code="<div "
        />
        <mu-attr code="class=" />
        <mu-text code='"common-class ' />
        <mu-text
          code="old-class"
          line-through
        />
        <mu-text
          bold
          code=" new-class"
        />
        <mu-text code='"' />
        <mu-tag code=">" />
      </code-line>
      <code-line level-2>
        <mu-tag code="</div>" />
      </code-line>

      <code-line />

      <code-line
        level-2
        bold
      >
        <mu-tag code="<div " />
        <mu-attr code="class=" />
        <mu-text code='"example-class' />
        <mu-text
          code=' old-class '
          non-bold
        />
        <mu-text code='new-class"' />
        <mu-tag code=">" />
      </code-line>
      <code-line level-2>
        <mu-tag code="</div>" />
      </code-line>
    </template-block>
  </code-markup>
</template>

<script setup>
  import useLang from '../useLang';
  import TemplateBlock from '@/components/blocks/TemplateBlock.vue';

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
  <div class="common-class old-class new-class">
  </div>

  <div class="example-class old-class new-class">
  </div>
</template>`;
</script>

<style lang="scss" scoped>

</style>