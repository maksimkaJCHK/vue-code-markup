<template>
  <div class="temp-doc">
    <template v-if="props.isRus">
      <h3>Компоненты для блока стилей</h3>

      <p>
        Это компоненты которые находятся в блоке "style". Ниже я их перечислю:
      </p>

      <ul>
        <li>
          <strong>MuStyleClass</strong> - этот компонент используется для вывода классов.
        </li>
        <li>
          <strong>MuStyleId</strong> - этот компонент используется для вывода id-ов.
        </li>
        <li>
          <strong>MuStyleTag</strong> - этот компонент используется для вывода тегов.
        </li>
        <li>
          <strong>MuStyleKey</strong> - если нужно вывести код препроцессора (less или sass), то этот компонент нужен для создания вложенных правил. К примеру, если у нас в классе ".book", лежит компонент "&-item", то его нужно добавить в этот компонент.
        </li>
        <li>
          <strong>MuStyleParam</strong> - в этот компонент нужно будет положить свойства CSS элемента. такими свойствами являются margin, padding, font-size и тд. 
        </li>
        <li>
          <strong>MuStyleUnitMeas</strong> - этот покпонент нужен для вывода единиц измерений (em. rem, px и тд).
        </li>
        <li>
          <strong>MuStyleAmpersand</strong> - этот компонент нужен для вывода амперсанда (&).
        </li>
        <li>
          <strong>MuStyleCurlyBrace</strong> - этот компонент нужен для вывода фигурных скобок.
        </li>
      </ul>
    </template>

    <template v-if="!props.isRus">
      <h3>Components for the style block</h3>

    </template>

    <com-imports
      :isRus="props.isRus"
      :codeParam="codeParam"
      :compArr="compArr"
      :codeImport="codeImport"
      :codeOutput="codeOutput"
      :lineCount="15"
    >
      <template #output>

        <code-line v-for="i in 8" :key="i" />
      </template>

      <template #code>

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
    'MuStyleClass',
    'MuStyleId',
    'MuStyleTag',
    'MuStyleKey',
    'MuStyleParam',
    'MuStyleUnitMeas',
    'MuStyleAmpersand',
    'MuStyleCurlyBrace',
  ];

  const codeImport = ``;

  const codeOutput = ``;
</script>

<style lang="scss">

</style>