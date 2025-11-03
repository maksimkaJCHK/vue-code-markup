<template>
  <input
    v-model="iValue"
    :id="id"
    :value="props.value"
    type="checkbox"
    class="ui-checkbox"
  />

  <label
    :for="id"
    class="ui-checkbox-label"
  >
    <slot></slot>
  </label>
</template>

<script setup>
  import useId from './hooks/useId';

  const { id } = useId();

  const props = defineProps({
    value: [String, Boolean],
  });

  const iValue = defineModel();
</script>

<style lang="scss">
  .ui-checkbox {
    margin-left: -30000px;
    position: absolute;

    &:checked + label {
      &::after {
        background: #1c1c8d;
      }
    }

    &-label {
      cursor: pointer;
      user-select: none;
      display: inline-block;
      position: relative;
      background: #fff;
      padding: 7px 10px 7px 30px;
      //border: 1px solid grey;
      box-shadow: 0 0 15px #aaa;
      border-radius: 5px;
      line-height: 120%;

      &::before,
      &::after {
        content: ' ';
        display: block;
        position: absolute;
        border-radius: 2px;
      }

      &::before {
        top: 10px;
        left: 7px;
        width: 14px;
        height: 14px;
        border: 1px solid grey;
      }

      &::after {
        top: 13px;
        left: 10px;
        width: 10px;
        height: 10px;
        background: transparent;
      }
    }
  }
</style>
