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
        background: #6897bb;
      }
    }

    &-label {
      cursor: pointer;
      user-select: none;
      display: inline-block;
      position: relative;
      background: #fff;
      padding: 7px 10px 7px 30px;
      box-shadow: 0 0 15px #aaa;
      border-radius: 5px;
      line-height: 120%;
      min-width: 2em;
      position: relative;

      &::before,
      &::after {
        top: 50%;
        content: ' ';
        display: block;
        position: absolute;
        border-radius: 2px;
      }

      &::before {
        left: 7px;
        width: 14px;
        height: 14px;
        margin-top: -7px;
        border: 1px solid #6897bb;
      }

      &::after {
        left: 10px;
        width: 10px;
        height: 10px;
        margin-top: -4px;
        background: transparent;
      }
    }
  }
</style>
