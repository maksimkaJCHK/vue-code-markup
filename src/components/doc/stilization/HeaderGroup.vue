<template>
  <watch-lines>
    <template #header>
      <template v-if="props.isRus">
        Стили заголовка окна с кодом
      </template>
      <template v-if="!props.isRus">
        Window title styles with code
      </template>
    </template>

    <template #default>
      <div :class="nameRow">
        <p v-if="props.isRus">
          <strong>--cm-header-padding</strong> - внутренние отступы для заголовка окна с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-header-padding</strong> - "padding" for the title of the window with the code.
        </p>

        <ui-input v-model="cmHeaderPadding" />
      </div>
      <div :class="nameRow">
        <p v-if="props.isRus">
          <strong>--cm-header-font-size</strong> - размер шрифта для заголовка окна с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-header-font-size</strong> - "font-size" for the title of the window with the code
        </p>

        <ui-input v-model="cmHeaderFontSize" />
      </div>
      <div :class="nameRow">
        <p v-if="props.isRus">
          <strong>--cm-header-color</strong> - цвет заголовка окна с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-header-color</strong> - the color of the window title with the code.
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