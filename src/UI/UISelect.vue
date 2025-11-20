<template>
  <div class="ui-select">
    <select v-model="iValue">
      <option
        v-for="item in props.options"
        :key="item.id"
        :value="item.id"
        :selected="iValue === item.id"
      >
        {{ item.title }}
      </option>
    </select>
  </div>
</template>

<script setup>
  const iValue = defineModel();

  const props = defineProps(['options']);
</script>

<style lang="scss">
  .ui-select {
    select {
      width: 100%;
      padding: var(--input-padding);
      display: block;
      border-radius: var(--input-border-radius);
      outline: none;
      border: var(--input-border);
      font: var(--input-font);

      &:focus {
        box-shadow: var(--input-fokus);
      }

      [selected] {
        color: #fff;
        background: #f69d04;
      }
    }
  }
</style>