<template>
  <div class="slots-doc">
    <template v-if="props.isRus">
      <h2>Слоты</h2>

      <p>
        Для данного раздела стоит начать сразу с примера, так будет понятнее:
      </p>

      <slots-example lang="ru" />
    </template>

    <template v-if="!props.isRus">
      <h2>Slots</h2>

      <slots-example />
    </template>
  </div>
</template>

<script setup>
  import SlotsExample from '@/components/code-examples/doc/SlotsExample.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });

</script>

<style lang="scss">

</style>