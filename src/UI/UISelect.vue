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
      padding: 7px 13px;
      display: block;
      border-radius: 5px;
      outline: none;
      border: 1px solid #6897bb;

      &:focus {
        box-shadow: 0 0 10px 0 rgba(55, 90, 127, .7);
      }

      [selected] {
        color: #fff;
        background: #f69d04;
      }
    }
  }
</style>