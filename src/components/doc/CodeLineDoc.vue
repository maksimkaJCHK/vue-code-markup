<template>
  <div class="code-line-doc">
    <template v-if="props.isRus">
      <h2>Компонент code-line</h2>

      <p>
        По сути это линия или строка с кодом. Элементы кода должны находиться в этом компоненте. Подключается он следующим способом:
      </p>

      <code-line-example lang="ru" />
    </template>

    <template v-if="!props.isRus">
      <h2>The code-line component</h2>

      <p>
        По сути это линия или строка с кодом. Элементы кода должны находиться в этом компоненте. Подключается он следующим способом:
      </p>

      <code-line-example lang="en" />
    </template>
  </div>
</template>

<script setup>
  import CodeLineExample from '@/components/code-examples/doc/CodeLineExample.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });
</script>

<style lang="scss" scoped>

</style>