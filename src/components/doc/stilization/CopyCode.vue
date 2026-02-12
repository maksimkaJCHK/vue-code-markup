<template>
  <watch-lines>
    <template #header>
      <template v-if="props.isRus">
        Стилизация иконок "скопировать код"
      </template>
      <template v-if="!props.isRus">
        Stylization of "copy code" icons
      </template>
    </template>

    <template #description>
      <p v-if="props.isRus">
        В данном разделе речь пойдет о стилизации иконок "скопировать код". Я реализовал 3 состояния. Это обычное состояние, состояние, когда произошла ошибка во время копирования кода в буфер обмена, и состояние когда код успешно скопирован в буфер обмена. Для всех этих состояний у меня есть 3 разные иконки. Здесь будет описано как менять цвет этих иконок. Если вы через слоты вставите свои картинки, то данный блок вам не поможет. У меня эти иконки реализованы через SVG, я просто меняю их "fill".
      </p>

      <p v-if="!props.isRus">
        In this section, we will talk about the styling of the "copy code" icons. I have implemented 3 states. This is the normal state, the state when an error occurred while copying the code to the clipboard, and the state when the code was successfully copied to the clipboard. I have 3 different icons for all these states. Here you will learn how to change the color of these icons. If you insert your pictures through the slots, then this block will not help you. I have these icons implemented via SVG, I just change them to "fill".
      </p>
    </template>

    <template #default>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-icon-color</strong> - данная CSS переменная отвечает за цвет иконки "скопировать код".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-icon-color</strong> - this CSS variable is responsible for the color of the "copy code" icon.
        </p>

        <ui-input v-model="cmIconColor" />
      </div>

      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-icon-error-color</strong> - данная CSS переменная отвечает за цвет иконки "скопировать код", если произошла ошибка.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-icon-error-color</strong> - this CSS variable is responsible for the color of the "copy code" icon if an error has occurred.
        </p>

        <ui-input v-model="cmIconErrorColor" />
      </div>

      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-icon-is-copy-color</strong> - данная CSS переменная отвечает за цвет иконки "скопировать код", когда код успешно скопирован в буфер обмена.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-icon-is-copy-color</strong> - this CSS variable is responsible for the color of the "copy code" icon when the code has been successfully copied to the clipboard.
        </p>

        <ui-input v-model="cmIconIsCopyColor" />
      </div>
    </template>
  </watch-lines>
</template>

<script setup>
  import WatchLines from '@/components/WatchLines.vue';
  import UiInput from '@/UI/UIInput.vue';

  const props = defineProps(['isRus', 'nameRow']);

  const cmIconColor = defineModel('cm-icon-color');
  const cmIconErrorColor = defineModel('cm-icon-error-color');
  const cmIconIsCopyColor = defineModel('cm-icon-is-copy-color');
</script>