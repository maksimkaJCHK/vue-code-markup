<template>
  <watch-lines>
    <template #header>
      <template v-if="props.isRus">
        Стилизация активной строки
      </template>
      <template v-if="!props.isRus">
        Styling the active line
      </template>
    </template>

    <template #default>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-active-bg</strong> - фон активной строки.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-active-bg</strong> - "background" of the active line.
        </p>

        <ui-input v-model="cmActiveBg" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-active-count-bg</strong> - фон для номера строки активной строки.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-active-count-bg</strong> - "background" for the line number of the active line.
        </p>

        <ui-input v-model="cmActiveCountBg" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-active-count-color</strong> - цвет для номера строки активной строки.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-active-count-color</strong> - the color for the line number of the active line.
        </p>

        <ui-input v-model="cmActiveCountColor" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-active-count-right-color</strong> - цвет правого "border" активной строки.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-active-count-right-color</strong> - the color of the right "border" of the active row.
        </p>

        <ui-input v-model="cmActiveCountRightColor" />
      </div>
    </template>
  </watch-lines>
</template>

<script setup>
  import WatchLines from '@/components/WatchLines.vue';
  import UiInput from '@/UI/UIInput.vue';

  const props = defineProps(['isRus', 'nameRow']);

  const cmActiveBg = defineModel('cm-active-bg');
  const cmActiveCountColor = defineModel('cm-active-count-color');
  const cmActiveCountBg = defineModel('cm-active-count-bg');
  const cmActiveCountRightColor = defineModel('cm-active-count-right-color');
</script>