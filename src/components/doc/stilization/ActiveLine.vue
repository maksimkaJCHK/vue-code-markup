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
          <strong>--cm-active-bg</strong> - данная CSS переменная отвечает за фон активной строки.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-active-bg</strong> - this CSS variable is responsible for the "background" of the active line.
        </p>

        <ui-input v-model="cmActiveBg" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-active-count-bg</strong> - данная CSS переменная отвечает за фон номера строки для активной строки.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-active-count-bg</strong> - this CSS variable is responsible for the "background" of the line number for the active line.
        </p>

        <ui-input v-model="cmActiveCountBg" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-active-count-color</strong> - данная CSS переменная отвечает за цвет номера строки для активной строки.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-active-count-color</strong> - this CSS variable is responsible for the color of the line number for the active line.
        </p>

        <ui-input v-model="cmActiveCountColor" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-active-count-right-color</strong> - данная CSS переменная отвечает за цвет правого "border" активной строки.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-active-count-right-color</strong> - this CSS variable is responsible for the color of the right "border" of the active row.
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