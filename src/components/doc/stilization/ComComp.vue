<template>
  <watch-lines>
    <template #header>
      <template v-if="props.isRus">
        Стилизация общих компонентов
      </template>

      <template v-if="!props.isRus">
        Styling common components
      </template>
    </template>

    <template #description>
      <div :class="props.smallClass">
        <p v-if="props.isRus">
          Общие компоненты - это компоненты которые могут быть использованы в блоке шаблонов, скриптов и стилей. К ним относятся компоненты отвечающие за комментарии, компоненты отвечающие за вывод текстовой и числовой информации.
        </p>

        <p v-if="!props.isRus">
          Common components are components that can be used in a block of templates, scripts, and styles. These include components responsible for comments, and components responsible for displaying text and numeric information.
        </p>
      </div>
    </template>

    <template #default>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-main-color</strong> - данная CSS переменная отвечает за цвет текста по умолчанию. Если вы вставите текст без какого-либо компонента, или выведите его в компоненте "mu-type", то применится значение этой переменной.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-main-color</strong> - this CSS variable is responsible for the default text color. If you insert text without any component, or output it in the "mu-type" component, the value of this variable will be applied.
        </p>

        <ui-input v-model="cmMainColor" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-text-color</strong> - данная CSS переменная отвечает за цвет текстовой информации, как правило это текст выведенный между 2 кавычками. Это значение будет применено к компоненту "mu-text".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-text-color</strong> - this CSS variable is responsible for the color of the text information, as a rule, it is the text printed between 2 quotation marks. This value will be applied to the "mu-text" component.
        </p>

        <ui-input v-model="cmTextColor" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-number-color</strong> - данная CSS переменная отвечает за цвет числовой информации, как правило это числа. Это значение будет применено к компоненту "mu-number".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-number-color</strong> - this CSS variable is responsible for the color of numeric information, usually numbers. This value will be applied to the "mu-number" component.
        </p>

        <ui-input v-model="cmNumberColor" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-comment-color</strong> - данная CSS переменная отвечает за цвет комментариев. Это значение будет применено к компоненту "mu-comment".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-comment-color</strong> - this CSS variable is responsible for the color of the comments. This value will be applied to the "mu-comment" component.
        </p>

        <ui-input v-model="cmCommentColor" />
      </div>
    </template>
  </watch-lines>
</template>

<script setup>
  import WatchLines from '@/components/WatchLines.vue';
  import UiInput from '@/UI/UIInput.vue';

  const props = defineProps([
    'isRus',
    'nameRow',
    'smallClass'
  ]);

  const cmMainColor = defineModel('cm-main-color');
  const cmTextColor = defineModel('cm-text-color');
  const cmNumberColor = defineModel('cm-number-color');
  const cmCommentColor = defineModel('cm-comment-color');
</script>