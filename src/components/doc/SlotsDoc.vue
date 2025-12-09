<template>
  <div class="slots-doc">
    <template v-if="props.isRus">
      <h2>Слоты</h2>

      <p>
        Для данного раздела стоит начать сразу с примера, так будет понятнее:
      </p>

      <slots-example lang="ru" />

      <p>
        Я думаю, пример выше отлично показывает как пользоваться слотами, но всё же ниже я их опишу.
      </p>

      <ul>
        <li>
          <strong>header</strong> - 
        </li>
        <li>
          <strong>default</strong> - 
        </li>
        <li>
          <strong>copy</strong> - 
        </li>
        <li>
          <strong>success</strong> - 
        </li>
        <li>
          <strong>error</strong> - 
        </li>
      </ul>
    </template>

    <template v-if="!props.isRus">
      <h2>Slots</h2>

      <p>
        For this section, it's worth starting with an example right away, so it will be clearer:
      </p>

      <slots-example />

      <p>
        I think the example above perfectly shows how to use the slots, but still I will describe them below.
      </p>
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