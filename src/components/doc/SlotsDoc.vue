<template>
  <div class="slots-doc">
    <template v-if="props.isRus">
      <h3>Слоты</h3>

      <p>
        Для данного раздела стоит начать сразу с примера, так будет понятнее:
      </p>

      <slots-example lang="ru" />
    </template>

    <template v-if="!props.isRus">
      <h3>Slots</h3>

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