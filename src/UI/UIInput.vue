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
      padding: 7px 13px;
      border-radius: 5px;
      font: 1em/120% system-ui, Avenir, Helvetica, Arial, sans-serif;
      box-sizing: border-box;
      border: 1px solid #6897bb;
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
        box-shadow: 0 0 10px 0 rgba(104, 151, 187, .7);

        &::placeholder {
          opacity: 0;
        }
      }
    }
  }
</style>
