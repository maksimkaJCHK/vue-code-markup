<template>
  <watch-lines>
    <template #header>
      <template v-if="props.isRus">
        Стилизация заголовка окна с кодом
      </template>
      <template v-if="!props.isRus">
        Styling the window header with the code
      </template>
    </template>

    <template #default>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-header-padding</strong> - данная CSS переменная отвечает за внутренние отступы для заголовка окна с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-header-padding</strong> - this CSS variable is responsible for the "padding" for the header of the window with the code.
        </p>

        <ui-input v-model="cmHeaderPadding" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-header-font-size</strong> - данная CSS переменная отвечает за размер шрифта для заголовка окна с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-header-font-size</strong> - this CSS variable is responsible for the "font-size" for the header of the window with the code.
        </p>

        <ui-input v-model="cmHeaderFontSize" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-header-color</strong> - данная CSS переменная отвечает за цвет заголовка окна с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-header-color</strong> - this CSS variable is responsible for the color of the header of the window with the code.
        </p>

        <ui-input v-model="cmHeaderColor" />
      </div>
    </template>
  </watch-lines>
</template>

<script setup>
  import WatchLines from '@/components/WatchLines.vue';
  import UiInput from '@/UI/UIInput.vue';

  const props = defineProps(['isRus', 'nameRow']);

  const cmHeaderPadding = defineModel('cm-header-padding');
  const cmHeaderFontSize = defineModel('cm-header-font-size');
  const cmHeaderColor = defineModel('cm-header-color');
</script>