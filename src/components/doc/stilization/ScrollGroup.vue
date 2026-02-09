<template>
  <watch-lines>
    <template #header>
      <template v-if="props.isRus">
        Cтилизация полосы прокрутки
      </template>

      <template v-if="!props.isRus">
        Styling the scrollbar
      </template>
    </template>

    <template #default>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-selection-bg</strong> - фон выделения в окне с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-selection-bg</strong> - "background" of the selection in the window with the code.
        </p>

        <ui-input v-model="cmSelectionBg" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-selection-color</strong> - цвет текста при выделении в окне с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-selection-color</strong> - the "color" of the text when highlighted in the window with the code.
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