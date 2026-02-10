<template>
  <watch-lines>
    <template #header>
      <template v-if="props.isRus">
        Стилизация "строк кода"
      </template>

      <template v-if="!props.isRus">
        Stylization "lines of code"
      </template>
    </template>

    <template #description>
      <p v-if="props.isRus">
        Этот блок посвящён стилизации "строк кода". Стилизацию активной строки я вынесу в отдельный блок, здесь я опишу стили для новых, изменённых, или удалённых строк. По сути здесь будет не много стилей, в основном это будут цвета границ у номеров строк.
      </p>

      <p v-if="!props.isRus">
        This section is dedicated to the styling of "lines of code". I will put the styling of the active line in a separate block, here I will describe the styles for new, modified, or deleted lines. In fact, there won't be many styles here, mostly the colors of the "borders" of the line numbers.
      </p>
    </template>

    <template #default>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-new-border</strong> - у новыx строк я делаю
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-new-border</strong> - the "color" of the text when highlighted in the window with the code.
        </p>

        <ui-input v-model="cmNewBorder" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-changed-border</strong> - цвет текста при выделении в окне с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-changed-border</strong> - the "color" of the text when highlighted in the window with the code.
        </p>

        <ui-input v-model="cmChangedBorder" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-deleted-border</strong> - цвет текста при выделении в окне с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-deleted-border</strong> - the "color" of the text when highlighted in the window with the code.
        </p>

        <ui-input v-model="cmDeletedBorder" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-deleted-opacity</strong> - цвет текста при выделении в окне с кодом.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-deleted-opacity</strong> - the "color" of the text when highlighted in the window with the code.
        </p>

        <ui-input v-model="cmDeletedOpacity" />
      </div>
    </template>
  </watch-lines>
</template>

<script setup>
  import WatchLines from '@/components/WatchLines.vue';
  import UiInput from '@/UI/UIInput.vue';

  const props = defineProps(['isRus', 'nameRow']);

  const cmNewBorder = defineModel('cm-new-border');
  const cmChangedBorder = defineModel('cm-changed-border');
  const cmDeletedBorder = defineModel('cm-deleted-border');
  const cmDeletedOpacity = defineModel('cm-deleted-opacity');
</script>