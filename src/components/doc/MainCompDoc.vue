<template>
  <div class="main-comp-doc">
    <template v-if="props.isRus">
      <h2>
        Главные компоненты
      </h2>

      <p>
        Это компоненты в которые должны быть обёрнуты все остальные компоненты, без них вся стилизация не имеет никакого смысла. Это "code-markup" и "code-line". Сode-markup - это самый главный компонент, в него должны быть обернуты все остальные компоненты, по сути это окно редактора, в котором находятся строки кода и примеры кода. Сode-line - это линия, или строка с кодом, все остальные компоненты должны быть обёрнуты им.
      </p>
    </template>

    <template v-if="!props.isRus">
      <h2>
        Main components
      </h2>

      <p>
        These are the components that all other components should be wrapped in. Without them, all styling makes no sense. These are "code-markup" and "code-line". Code markup is the most important component, all other components should be wrapped in it. In fact, it is an editor window containing lines of code and code examples. A code-line is a line or string with a code, all other components must be wrapped with it.
      </p>
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