<template>
  <watch-lines is-hint>
    <template #header>
      <template v-if="props.isRus">
        Общие настройки
      </template>

      <template v-if="!props.isRus">
        General settings
      </template>
    </template>

    <template #default>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-bg</strong> - данная CSS переменная отвечает за фон окна с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-bg</strong> - this CSS variable is responsible for the "background" of the window with the code.
        </p>

        <ui-input v-model="cmBg" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-border-radius</strong> - данная CSS переменная отвечает за "border-radius" окна с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-border-radius</strong> - this CSS variable is responsible for the "border-radius" of the window with the code.
        </p>

        <ui-input v-model="cmBorderRadius" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-text-font-size</strong> - данная CSS переменная отвечает за размер шрифта окна с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-text-font-size</strong> - this CSS variable is responsible for the "font-size" of the window with the code.
        </p>

        <ui-input v-model="cmTextFontSize" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-text-font-family</strong> - данная CSS переменная отвечает за семейство шрифта окна с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-text-font-family</strong> - this CSS variable is responsible for the font family of the window with the code.
        </p>

        <ui-input v-model="cmTextFontFamily" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-text-line-height</strong> - данная CSS переменная отвечает за высоту шрифта окна с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-text-line-height</strong> - this CSS variable is responsible for the "line-height" of the window with the code.
        </p>

        <ui-input v-model="cmTextLineHeight" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>-cm-max-height-body</strong> - данная CSS переменная отвечает за максимальную высоту окна кода без шапки.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-max-height-body</strong> - this CSS variable is responsible for the "max-height" of the code window without a header.
        </p>

        <ui-input v-model="cmMaxHeightBody" />
      </div>
    </template>
  </watch-lines>
</template>

<script setup>
  import WatchLines from '@/components/WatchLines.vue';
  import UiInput from '@/UI/UIInput.vue';

  const props = defineProps(['isRus', 'nameRow']);

  const cmBg = defineModel('cm-bg');
  const cmBorderRadius = defineModel('cm-border-radius');
  const cmTextFontSize = defineModel('cm-text-font-size');
  const cmTextFontFamily = defineModel('cm-text-font-family');
  const cmTextLineHeight = defineModel('cm-text-line-height');
  const cmMaxHeightBody = defineModel('cm-max-height-body');
</script>