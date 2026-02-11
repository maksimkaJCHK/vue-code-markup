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
          <strong>--cm-scroll-bar-bg</strong> - данная CSS переменная отвечает за фон полосы прокрутки.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-scroll-bar-bg</strong> - This CSS variable is responsible for the "background" of the scrollbar.
        </p>

        <ui-input v-model="cmScrollBarBg" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-thumb-bg</strong> - данная CSS переменная отвечает за фон ползунка полосы прокрутки.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-thumb-bg</strong> - this CSS variable is responsible for the background of the scrollbar slider.
        </p>

        <ui-input v-model="cmThumbBg" />
      </div>
    </template>
  </watch-lines>
</template>

<script setup>
  import WatchLines from '@/components/WatchLines.vue';
  import UiInput from '@/UI/UIInput.vue';

  const props = defineProps(['isRus', 'nameRow']);

  const cmScrollBarBg = defineModel('cm-scroll-bar-bg');
  const cmThumbBg = defineModel('cm-thumb-bg');
</script>