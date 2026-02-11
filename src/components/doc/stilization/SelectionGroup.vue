<template>
  <watch-lines>
    <template #header>
      <template v-if="props.isRus">
        Стилизация выделения текста
      </template>

      <template v-if="!props.isRus">
        Stylization text selection
      </template>
    </template>

    <template #description>
      <p v-if="props.isRus">
        Этот блок посвящён выделению текста. Для того, чтобы увидеть результат применения стилей, необходимо выделить текст в окне с кодом. Я задаю фон выделения и цвет текста при выделении.
      </p>

      <p v-if="!props.isRus">
        This section is dedicated to text selection. In order to see the result of applying styles, you need to select the text in the window with the code. I set the background of the selection and the color of the text when selected.
      </p>
    </template>

    <template #default>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-selection-bg</strong> - данная CSS переменная отвечает за фон выделения в окне с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-selection-bg</strong> - this CSS variable is responsible for the "background" of the selection in the window with the code.
        </p>

        <ui-input v-model="cmSelectionBg" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-selection-color</strong> - данная CSS переменная отвечает за цвет текста при выделении в окне с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-selection-color</strong> - this CSS variable is responsible for the "color" of the text when selected in the window with the code.
        </p>

        <ui-input v-model="cmSelectionColor" />
      </div>
    </template>
  </watch-lines>
</template>

<script setup>
  import WatchLines from '@/components/WatchLines.vue';
  import UiInput from '@/UI/UIInput.vue';

  const props = defineProps(['isRus', 'nameRow']);

  const cmSelectionBg = defineModel('cm-selection-bg');
  const cmSelectionColor = defineModel('cm-selection-color');
</script>