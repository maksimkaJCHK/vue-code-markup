<template>
  <watch-lines>
    <template #header>
      <template v-if="props.isRus">
        Стилизация компонентов блока "script"
      </template>

      <template v-if="!props.isRus">
        Stylization of the "script" block components
      </template>
    </template>

    <template #description>
      <p v-if="props.isRus">
        Данный раздел посвящён компонентам которые находятся в блоке "script". Он тоже не большой, здесь будет показано как стилизовать ключевые слова языка JS, переменные, названия функций и ключей объекта.
      </p>

      <p v-if="!props.isRus">
        This section is dedicated to the components that are in the "script" block. It's not big either, and it shows how to style JS keywords, variables, function names, and object keys.
      </p>
    </template>

    <template #default>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-key-color</strong> - данная CSS переменная отвечает за цвет ключей объекта. Это значение будет применено к компоненту "mu-key".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-key-color</strong> - this CSS variable is responsible for the color of the object's keys. This value will be applied to the "mu-key" component.
        </p>

        <ui-input v-model="cmKeyColor" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-key-words-color</strong> - данная CSS переменная отвечает за цвет ключевых слов. К ним относятся такие языковые конструкции как let, const, var, function, return и тд. Это значение будет применено к компоненту "mu-key-words".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-key-words-color</strong> - this CSS variable is responsible for the color of keywords. These include language constructs such as let, const, var, function, return, and so on. This value will be applied to the "mu-key-words" component.
        </p>

        <ui-input v-model="cmKeyWordsColor" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-variable-color</strong> - данная CSS переменная отвечает за цвет переменных, они идут сразу после ключевых слов let, const, var. Это значение будет применено к компоненту "mu-variable".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-variable-color</strong> - this CSS variable is responsible for the color of the variables, they come immediately after the keywords let, const, var. This value will be applied to the "mu-variable" component.
        </p>

        <ui-input v-model="cmVariableColor" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-function-color</strong> - данная CSS переменная отвечает за цвет имени функции. Это значение будет применено к компоненту "mu-function".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-function-color</strong> - this CSS variable is responsible for the color of the function name. This value will be applied to the "mu-function" component.
        </p>

        <ui-input v-model="cmFunctionColor" />
      </div>
    </template>
  </watch-lines>
</template>

<script setup>
  import WatchLines from '@/components/WatchLines.vue';
  import UiInput from '@/UI/UIInput.vue';

  const props = defineProps(['isRus', 'nameRow']);

  const cmKeyColor = defineModel('cm-key-color');
  const cmKeyWordsColor = defineModel('cm-keyWords-color');
  const cmVariableColor = defineModel('cm-variable-color');
  const cmFunctionColor = defineModel('cm-function-color');


</script>