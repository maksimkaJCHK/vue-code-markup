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
          <strong>MuType</strong> - это типовой текст. Если вы обернёте какой-нибудь текст компонентом "code-line", то обёрнутый текст будет того же цвета, что и цвет компонента "MuType".
        </li>
      </ul>
    </template>

    <template v-if="!props.isRus">
      <h3>Common document markup components</h3>

      <p>
        The following components are common to the template block, scripts, and styles:
      </p>

      <ul>
        <li>
          <strong>MuText</strong> is plain text, in markup it is what is enclosed in single or double quotes.
        </li>
        <li>
          <strong>MuNumber</strong> is all the numbers that occur in the markup.
        </li>
        <li>
          <strong>MuComment</strong> - these are all comments that occur in the markup.
        </li>
        <li>
          <strong>MuType</strong> is a standard text. If you wrap some text with the "code-line" component, the wrapped text will be the same color as the color of the "MuType" component.
        </li>
      </ul>
    </template>

    <com-imports
      :isRus="props.isRus"
      :codeParam="codeParam"
      :compArr="compArr"
      :codeImport="codeImport"
      :codeOutput="codeOutput"
    >
      <template #output>
        <code-line>
          <mu-text code="Some text" />
        </code-line>
        <code-line>
          <mu-number code="1234" />
        </code-line>
        <code-line>
          <mu-comment code="// Some comment" />
        </code-line>
        <code-line>
          <mu-type code="Type code" />
        </code-line>
      </template>

      <template #code>
        <code-line new level-3>
          <mu-tag code="<code-line>" />
        </code-line>
        <code-line new level-4>
          <mu-tag code="<mu-text " />
          <mu-attr code="code=" />
          <mu-text code='"Some text" ' />
          <mu-tag code="/>" />
        </code-line>
        <code-line new level-3>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line new level-3>
          <mu-tag code="<code-line>" />
        </code-line>
        <code-line new level-4>
          <mu-tag code="<mu-number " />
          <mu-attr code="code=" />
          <mu-text code='"1234" ' />
          <mu-tag code="/>" />
        </code-line>
        <code-line new level-3>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line new level-3>
          <mu-tag code="<code-line>" />
        </code-line>
        <code-line new level-4>
          <mu-tag code="<mu-comment " />
          <mu-attr code="code=" />
          <mu-text code='"// Some comment" ' />
          <mu-tag code="/>" />
        </code-line>
        <code-line new level-3>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line new level-3>
          <mu-tag code="<code-line>" />
        </code-line>
        <code-line new level-4>
          <mu-tag code="<mu-type " />
          <mu-attr code="code=" />
          <mu-text code='"Type code" ' />
          <mu-tag code="/>" />
        </code-line>
        <code-line new level-3>
          <mu-tag code="</code-line>" />
        </code-line>
      </template>
    </com-imports>
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

  const codeImport = `<template>
  <code-markup>
    <code-line>
      <mu-text code="Some text" />
    </code-line>
    <code-line>
      <mu-number code="1234" />
    </code-line>
    <code-line>
      <mu-comment code="// Some comment" />
    </code-line>
    <code-line>
      <mu-type code="Type code" />
    </code-line>
  </code-markup>
</template>

<${'script'} setup>
  import {
    CodeMarkup,
    CodeLine,
    MuText,
    MuNumber,
    MuComment,
    MuType,
  } from 'vue-code-markup';
  import 'vue-code-markup/lib/style.css';
</${'script'}>`;

  const codeOutput = `Some text
1234
// Some comment
Type code`;
</script>

<style lang="scss" scoped>

</style>