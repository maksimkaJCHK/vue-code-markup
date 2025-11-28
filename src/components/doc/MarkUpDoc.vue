<template>
  <div class="mu-comp-doc">
    <template v-if="props.isRus">
      <h2>
        Компоненты для разметки документа
      </h2>

      
    </template>

    <template v-if="!props.isRus">
      <h2>
        Components for document markup
      </h2>

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

<style lang="scss" scoped>

</style>