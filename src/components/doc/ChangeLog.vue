<template>
  <div class="change-log">
    <template v-if="props.isRus">
      <h3>Журнал изменений</h3>

      <p>
        Я буду вести журнал изменений начиная с версии "0.5.0". В этой версии я сделал входной параметр "theme" для компонента "code-markup". В данной версии я реализовал 2 темы: "darcula" и "monokai". Тема "darcula" была по умолчанию, тему "monokai" я сделал.
      </p>
    </template>

    <template v-if="!props.isRus">
      <h3>The change log</h3>

      <p>
        I will keep a change log starting from version "0.5.0". In this version, I made the input parameter "theme" for the "code-markup" component. In this version, I have implemented 2 themes: "darcula" and "monokai". The "darcula" theme was the default, I made the "monokai" theme.
      </p>
    </template>
  </div>
</template>

<script setup>
  import useLang from '@/components/code-examples/uselang.js';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });

  const { codeParam } = useLang({
    lang: props.isRus ? 'ru' : 'en'
  });
</script>

<style lang="scss">

</style>