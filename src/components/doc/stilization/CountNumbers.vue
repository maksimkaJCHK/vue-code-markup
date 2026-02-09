<template>
  <watch-lines>
    <template #header>
      <template v-if="props.isRus">
        Стили для номеров строк
      </template>
      <template v-if="!props.isRus">
        Styles for line numbers
      </template>
    </template>

    <template #default>
      <div :class="nameRow">
        <p v-if="props.isRus">
          <strong>--cm-count-bg</strong> - фон для номеров строк.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-count-bg</strong> - "background" for line numbers.
        </p>

        <ui-input v-model="cmCountBg" />
      </div>
      <div :class="nameRow">
        <p v-if="props.isRus">
          <strong>--cm-count-color</strong> - цвет текста для номеров строк.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-count-color</strong> - text color for line numbers.
        </p>

        <ui-input v-model="cmCountColor" />
      </div>
      <div :class="nameRow">
        <p v-if="props.isRus">
          <strong>--cm-count-padding</strong> - внутренние отступы для номеров строк.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-count-padding</strong> - "padding" for line numbers.
        </p>

        <ui-input v-model="cmCountPadding" />
      </div>
      <div :class="nameRow">
        <p v-if="props.isRus">
          <strong>--cm-count-border-right</strong> - цвет правого "border" для номеров строк.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-count-border-right</strong> - the color of the right "border" for line numbers.
        </p>

        <ui-input v-model="cmCountBorderRight" />
      </div>
    </template>
  </watch-lines>
</template>

<script setup>
  import WatchLines from '@/components/WatchLines.vue';
  import UiInput from '@/UI/UIInput.vue';

  const props = defineProps(['isRus', 'nameRow']);

  const cmCountBg = defineModel('cm-count-bg');
  const cmCountColor = defineModel('cm-count-color');
  const cmCountPadding = defineModel('cm-count-padding');
  const cmCountBorderRight = defineModel('cm-count-border-right');
</script>