<template>
  <div class="temp-doc">
    <template v-if="props.isRus">
      <h3>Компоненты для блока шаблона</h3>

      <p>
        Это компоненты, которые находятся в блоке "template". Также к этим компонента относятся сами блоки "template", "script", "style". Таких компонентов всего лишь 2:
      </p>

      <ul>
        <li>
          <strong>MuTag</strong> - это теги блока "template", а также названия блоков "template", "script", "style".
        </li>
        <li>
          <strong>MuAttr</strong> - это атрибуты тегов, к примеру "setup" для блока "script".
        </li>
      </ul>

      <p>Пример подключения компонентов шаблона:</p>
    </template>

    <template v-if="!props.isRus">
      <h3>Components for the template block</h3>

      <p>
        These are the components that are in the "template" block. These components also include the "template", "script", and "style" blocks themselves. There are only 2 such components:
      </p>

      <ul>
        <li>
          <strong>MuTag</strong> are the tags of the "template" block, as well as the names of the "template", "script", and "style" blocks.
        </li>
        <li>
          <strong>MuAttr</strong> are tag attributes, for example, "setup" for the "script" block.
        </li>
      </ul>

      <p>Example of connecting template components:</p>
    </template>

    <com-imports
      :isRus="props.isRus"
      :codeParam="codeParam"
      :compArr="compArr"
      :codeImport="codeImport"
      :codeOutput="codeOutput"
      :lineCount="12"
    >
      <template #output>
        <code-line>
          <mu-tag code="<script" />
          <mu-attr code="setup" />
          <mu-tag code=">" />
        </code-line>
        <code-line>
          <mu-tag :code="`</${'script'}>`" />
        </code-line>

        <code-line v-for="i in 10" :key="i" />
      </template>

      <template #code>
        <code-line new level-3>
          <mu-tag code="<code-line>" />
        </code-line>
        <code-line new level-4>
          <mu-tag code='<mu-tag ' />
          <mu-attr code='code=' />
          <mu-text code='"<script"' />
          <mu-tag code=' /> ' />
        </code-line>
        <code-line new level-4>
          <mu-tag code='<mu-attr ' />
          <mu-attr code='code=' />
          <mu-text code='"setup"' />
          <mu-tag code=' />' />
        </code-line>
        <code-line new level-4>
          <mu-tag code='<mu-tag ' />
          <mu-attr code='code=' />
          <mu-text code='">"' />
          <mu-tag code=' />' />
        </code-line>
        <code-line new level-3>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line new level-3>
          <mu-tag code="<code-line>" />
        </code-line>
        <code-line new level-4>
          <mu-tag code='<mu-tag ' />
          <mu-attr code=':code=' />
          <mu-text :code="codeT" />
          <mu-tag code=' />' />
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
    'MuTag',
    'MuAttr',
  ];

  const codeS = '<mu-tag :code="`</${\'script\'}>`" />';
  const codeT = '"`</${\'script\'}>`"';

  const codeImport = `<template>
  <code-markup>
    <code-line>
      <mu-tag code="<script" />
      <mu-attr code=" setup" />
      <mu-tag code=">" />
    </code-line>
    <code-line>
      ${codeS}
    </code-line>
  </code-markup>
</template>

<script setup>
  import {
    CodeMarkup,
    CodeLine,
    MuTag,
    MuAttr,
  } from 'vue-code-markup';
  import 'vue-code-markup/lib/style.css';
</${'script'}>`;

  const codeOutput = `<script setup>
</${'script'}>`;
</script>

<style lang="scss">

</style>