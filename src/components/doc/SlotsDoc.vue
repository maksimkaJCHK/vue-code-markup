<template>
  <div class="slots-doc">
    <template v-if="props.isRus">
      <h3>Слоты</h3>

      
    </template>

    <template v-if="!props.isRus">
      <h3>Slots</h3>

      
    </template>


  </div>
</template>

<script setup>
  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });

</script>

<style lang="scss">

</style>