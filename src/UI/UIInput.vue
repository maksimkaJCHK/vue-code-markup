<template>
  <div class="inp">
    <input
      v-model="iValue"
      type="text"
      :placeholder="props.placeholder"
    >
  </div>
</template>

<script setup>
  const props = defineProps({
    placeholder: {
      type: String,
      default: ''
    },
  });

  const iValue = defineModel();
</script>

<style lang="scss" scoped>
  .inp {
    position: relative;

    input[type="text"] {
      width: 100%;
      display: block;
      outline: none;
      color: #000;
      padding: var(--input-padding);
      border-radius: var(--input-border-radius);
      font: var(--input-font);
      box-sizing: border-box;
      border: var(--input-border);
      position: relative;
      background-color: #fff;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      &::placeholder {
        color: #000;
        opacity: .6;
      }

      &:focus {
        box-shadow: var(--input-fokus);

        &::placeholder {
          opacity: 0;
        }
      }
    }
  }
</style>
