<template>
  <div class="code-line-doc">
    <template v-if="props.isRus">
      <h2>Компонент code-line</h2>

      <p>
        По сути это линия или строка с кодом.
      </p>
    </template>

    <template v-if="!props.isRus">
      <h2>The code-line component</h2>
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