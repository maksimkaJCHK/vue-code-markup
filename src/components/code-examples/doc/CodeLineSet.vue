<template>
  <code-markup
    :is-header="false"
    :code="code"
    v-bind="props.codeParam"
  >
    <template 
      v-for="item in repeatArr"
      :key="item"
    >
      <code-line v-if="item !== 1" />
      <code-line>
        <mu-comment :code="textInEditor[0]" />
      </code-line>
      <code-line
        :new="props.newParam"
        :active="props.active"
        :visible-copy="props.visibleCopy"
      >
        {{ textInEditor[1] }}
      </code-line>
      <code-line>
        <mu-comment :code="textInEditor[2]" />
      </code-line>
    </template>
  </code-markup>
</template>

<script setup>
  import { computed } from 'vue';

  const repeatArr = [1, 2, 3, 4, 5];

  const props = defineProps([
    'isRus',
    'codeParam',
    'newParam',
    'active',
    'visibleCopy',
  ]);

  const textInEditor = computed(() => {
    if (props.isRus) {
      return [
        '<!-- Ниже приведена строка для отображения входных параметров -->',
        'Пример компонента "code-line" для отображения входных параметров',
        '<!-- Выше приведена строка для отображения входных параметров -->'
      ]
    }

    return [
      '<!-- Below is a line for displaying input parameters -->',
      'Example of the "code-line" component for displaying input parameters',
      '<!-- Above is a line for displaying input parameters -->'
    ]
  });

  const bCode = () => textInEditor.value.join('\n');
  const code = computed(() => repeatArr.map(bCode).join('\n\n'));
</script>

<style lang="scss" scoped>

</style>