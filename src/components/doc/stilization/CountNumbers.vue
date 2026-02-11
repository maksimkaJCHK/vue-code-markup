<template>
  <watch-lines>
    <template #header>
      <template v-if="props.isRus">
        Стилизация номеров строк
      </template>
      <template v-if="!props.isRus">
        Stylization of line numbers
      </template>
    </template>

    <template #default>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-count-bg</strong> - данная CSS переменная отвечает за фон для номеров строк.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-count-bg</strong> - this CSS variable is responsible for the "background" for line numbers.
        </p>

        <ui-input v-model="cmCountBg" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-count-color</strong> - данная CSS переменная отвечает за цвет текста для номеров строк.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-count-color</strong> - this CSS variable is responsible for the text color for line numbers.
        </p>

        <ui-input v-model="cmCountColor" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-count-padding</strong> - данная CSS переменная отвечает за внутренние отступы для номеров строк.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-count-padding</strong> - this CSS variable is responsible for the "paddings" for line numbers.
        </p>

        <ui-input v-model="cmCountPadding" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-count-border-right</strong> - данная CSS переменная отвечает за цвет правого "border" для номеров строк.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-count-border-right</strong> - this CSS variable is responsible for the color of the right "border" for line numbers.
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