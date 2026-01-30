<template>
  <div
    class="watch-css"
    :class="{ 'watch-css_is-code': isCode }"
  >
    <div
      class="watch-css__text"
      @click="chIsCode"
    >
      <template v-if="props.isRus">
        Посмотреть стили
      </template>
      <template v-if="!props.isRus">
        View styles
      </template>
    </div>

    <div class="watch-css__block">
      <pre>{{ codeComp }}</pre>

      <code-icon
        svg-class="watch-css__icon"
        @click="copy"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { copyCode } from "work-with-net";

  import CodeIcon from '@/code-markup/components/icons/CodeIcon.vue';

  const props = defineProps([
    'isRus',
    'code'
  ]);

  const bObj = (obj) => JSON.stringify(obj).replace(/\"/g, '')
    .replace(/,/g, ';\n  ')
    .replace(/{/g, '{\n  ')
    .replace(/}/g, '\n}')
    .replace(/:/g, ': ');

  const codeComp = computed(() => bObj(props.code));

  const isCode = ref(false);
  const chIsCode = () => isCode.value = !isCode.value;

  const copy = () => copyCode(codeComp.value);
</script>

<style lang="scss">
  .watch-css {
    color: #fff;
    margin-top: 15px;
    background: var(--cm-bg);
    border-radius: 5px;

    &_is-code {
      .watch-css__block {
        display: block;
      }
    }

    &__text,
    &__block {
      padding: 10px 15px;
    }

    &__text {
      padding-right: 25px;
      cursor: pointer;
      user-select: none;
      position: relative;

      &::after {
        top: 50%;
        right: 10px;
        content: ' ';
        display: block;
        position: absolute;
        margin-top: -2px;
        border: 5px solid transparent;
        border-top: 5px solid #fff;
      }
    }

    &__block {
      margin: 0;
      display: none;
      position: relative;
      padding-top: 0;

      pre {
        margin: 0;
        padding: 0;
        overflow: auto;
      }
    }

    &__icon {
      top: 0;
      right: 10px;
      width: 12px;
      height: auto;
      cursor: pointer;
      position: absolute;

      &:active {
        transform: translateY(1px);
      }

      path {
        fill: #fff;
      }
    }
  }
</style>