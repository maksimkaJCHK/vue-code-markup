<template>
  <code-markup
    :code="code"
    header="Slots example"
    v-bind="codeParam"
  >
    <template-block>

      <code-line level-2>
        <mu-tag code="<code-markup>" />
      </code-line>

      <template-component type="header">
        <mu-comment :code="`<!-- ${headerText} -->`" />
      </template-component>

      <template-component type="default">
        <mu-comment :code="`<!-- ${defaultText} -->`" />
      </template-component>

      <template-component type="default">
        <mu-comment :code="`<!-- ${defaultText} -->`" />
      </template-component>

      <code-line level-2>
        <mu-tag code="</code-markup>" />
      </code-line>

    </template-block>

    <code-line />
    <script-block>

    </script-block>
  </code-markup>
</template>

<script setup>
  import { computed } from 'vue';
  import useLang from '../useLang';

  import TemplateBlock from '@/components/blocks/TemplateBlock.vue';
  import ScriptBlock from '@/components/blocks/ScriptBlock.vue';
  import TemplateComponent from '@/components/blocks/TemplateComponent.vue';

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

  const code = ``;

  const headerText = computed(() => {
    if (props.lang === 'ru') return 'Сюда вставляется заголвок окна с кодом';

    return 'The header of the window with the code is inserted here';
  });

  const defaultText = computed(() => {
    if (props.lang === 'ru') return 'Сюда вставляется код по умолчанию, если никаких других шаблонов не задано';

    return 'The default code is inserted here if no other templates are specified';
  });
</script>

<style lang="scss" scoped>

</style>