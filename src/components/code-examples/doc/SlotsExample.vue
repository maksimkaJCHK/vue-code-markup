<template>
  <code-markup
    :code="code"
    :header="headerText"
    v-bind="codeParam"
    :key="props.lang"
  >
    <template-block>

      <code-line level-2>
        <mu-tag code="<code-markup>" />
      </code-line>

      <template-component type="header">
        <mu-comment :code="`<!-- ${headerComment} -->`" />
      </template-component>

      <template-component type="default">
        <mu-comment :code="`<!-- ${defaultComment} -->`" />
      </template-component>

      <code-line />
      <code-line level-3>
        <mu-comment :code="`<!-- ${iconComment} -->`" />
      </code-line>

      <template-component type="copy">
        <mu-comment :code="`<!-- ${copyComment} -->`" />
      </template-component>

      <template-component type="success">
        <mu-comment :code="`<!-- ${successComment} -->`" />
      </template-component>

      <template-component type="error">
        <mu-comment :code="`<!-- ${errorComment} -->`" />
      </template-component>

      <code-line level-2>
        <mu-tag code="</code-markup>" />
      </code-line>

    </template-block>
  </code-markup>
</template>

<script setup>
  import { computed } from 'vue';
  import useLang from '../useLang';

  import TemplateBlock from '@/components/blocks/TemplateBlock.vue';
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

  const code = computed(() => {
    if (props.lang === 'ru') return `<template>
  <code-markup>
    <template #header>
      <!-- Сюда вставляется заголвок окна с кодом -->
    </template>
    <template #default>
      <!-- Сюда вставляется код по умолчанию, если никаких других шаблонов не задано -->
    </template>

    <!-- Ниже находятся слоты для иконок "скопировать текст", "текст удачно скопирован" и иконка когда произошла ошибка во время копирования текста в буфер обмена -->
    <template #copy>
      <!-- Сюда вставляется иконка "скопировать текст" -->
    </template>
    <template #success>
      <!-- Сюда вставляется иконка, когда текст удачно скопирован в буфер обмена -->
    </template>
    <template #error>
      <!-- Сюда вставляется иконка, если произошла ошибка во время копирования текста в буфер обмена -->
    </template>
  </code-markup>
</template>`;

    return `<template>
  <code-markup>
    <template #header>
      <!-- The header of the window with the code is inserted here -->
    </template>
    <template #default>
      <!-- The default code is inserted here if no other templates are specified -->
    </template>

    <!-- Below are slots for the icons "copy text", "text successfully copied" and the icon when an error occurred while copying text to the clipboard -->
    <template #copy>
      <!-- The "copy text" icon is inserted here -->
    </template>
    <template #success>
      <!-- An icon is inserted here when the text has been successfully copied to the clipboard -->
    </template>
    <template #error>
      <!-- An icon is inserted here if an error occurred while copying text to the clipboard -->
    </template>
  </code-markup>
</template>`
  });

  const headerText = computed(() => {
    if (props.lang === 'ru') return 'Примеры слотов';

    return 'Slots examples';
  });

  const headerComment = computed(() => {
    if (props.lang === 'ru') return 'Сюда вставляется заголвок окна с кодом';

    return 'The header of the window with the code is inserted here';
  });

  const defaultComment = computed(() => {
    if (props.lang === 'ru') return 'Сюда вставляется код по умолчанию, если никаких других шаблонов не задано';

    return 'The default code is inserted here if no other templates are specified';
  });

  const iconComment = computed(() => {
    if (props.lang === 'ru') return 'Ниже находятся слоты для иконок "скопировать текст", "текст удачно скопирован" и иконка когда произошла ошибка во время копирования текста в буфер обмена';

    return 'Below are slots for the icons "copy text", "text successfully copied" and the icon when an error occurred while copying text to the clipboard';
  });

  const copyComment = computed(() => {
    if (props.lang === 'ru') return 'Сюда вставляется иконка "скопировать текст"';

    return 'The "copy text" icon is inserted here';
  });

  const successComment = computed(() => {
    if (props.lang === 'ru') return 'Сюда вставляется иконка, когда текст удачно скопирован в буфер обмена';

    return 'An icon is inserted here when the text has been successfully copied to the clipboard';
  });

  const errorComment = computed(() => {
    if (props.lang === 'ru') return 'Сюда вставляется иконка, если произошла ошибка во время копирования текста в буфер обмена';

    return 'An icon is inserted here if an error occurred while copying text to the clipboard';
  });
</script>

<style lang="scss" scoped>

</style>