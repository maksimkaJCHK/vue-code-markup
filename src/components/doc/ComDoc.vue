<template>
  <div class="common-doc">
    <template v-if="props.isRus">
      <h3>Общие компоненты разметки документа</h3>

      <p>
        Общими для блока шаблона, скриптов, и стилей являются следующие компоненты:
      </p>

      <ul>
        <li>
          <strong>MuText</strong> - это обычный текст, в разметке это то, что заключено в одинарные, или двойные кавычки.
        </li>
        <li>
          <strong>MuNumber</strong> - это все цифры, которые встречаются в разметке.
        </li>
        <li>
          <strong>MuComment</strong> - это все комментарии, которые встречаются в разметке.
        </li>
        <li>
          <strong>MuType</strong> - это типовой текст.
        </li>
      </ul>

      <com-imports
        :codeParam="codeParam"
        :compArr="compArr"
      >
        <code-line level-3>
          <mu-text code="Some text" />
        </code-line>
        <code-line level-3>
          <mu-number code="1234" />
        </code-line>
        <code-line level-3>
          <mu-comment code="// Some comment" />
        </code-line>
        <code-line level-3>
          <mu-type code="Type code" />
        </code-line>
      </com-imports>
    </template>

    <template v-if="!props.isRus">
      <h3>Common document markup components</h3>

      <com-imports
        :codeParam="codeParam"
        :compArr="compArr"
      >

      </com-imports>
    </template>
  </div>
</template>

<script setup>
  import useLang from '@/components/code-examples/uselang.js';
  import ComImports from '@/components/code-examples/doc/ComImports.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });

  const { codeParam } = useLang({
    lang: props.isRus ? 'ru' : 'en'
  });

  const compArr = [
    'MuText',
    'MuNumber',
    'MuComment',
    'MuType',
  ];
</script>

<style lang="scss" scoped>

</style>