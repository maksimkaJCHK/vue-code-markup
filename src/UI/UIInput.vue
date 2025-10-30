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
      padding: 5px 10px;
      border-radius: 5px;
      font: 16px/120% system-ui, Avenir, Helvetica, Arial, sans-serif;;
      box-sizing: border-box;
      border: 1px solid grey;
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
        box-shadow: 0 0 10px 0 rgba(55, 90, 127, .7);

        &::placeholder {
          opacity: 0;
        }
      }
    }
  }
</style>
