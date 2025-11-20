<template>
  <div class="code-line-doc">
    <template v-if="props.isRus">
      
    </template>

    <template v-if="!props.isRus">
      
    </template>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue';

  import useLang from '@/components/code-examples/uselang.js';

  import CodeMarcupExample from '@/components/code-examples/doc/CodeMarcupExample.vue';
  import BooksListBody from '@/components/code-examples/books/BooksListBody.vue';
  import { bookListCode } from '@/components/code-examples/books/BookListCode.js';

  import UiInput from '@/UI/UIInput.vue';
  import UiCheckbox from '@/UI/UICheckbox.vue';
  import UiSelect from '@/UI/UISelect.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });
</script>

<style lang="scss" scoped>
  .settings-doc {
    &-cont {
      display: grid;
      gap: 10px 20px;;
      grid-template-columns: 1fr 1fr;

      @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
      }
    }
    
    &-col {
      .code-markup {
        margin: 0;
      }
    }

    &-content {
      p {
        margin: .5em 0;

        &:first-of-type {
          margin-top: 0;
        }
      }
    }

    &-row {
      margin: 1em 0;

      &:first-of-type {
        margin-top: 0;
      }
    }

    &-code {
      overflow: hidden;
    }

    @media screen and (max-width: 700px) {
      &-code {
        grid-row-start: 2;
      }

      &-content {
        grid-row-start: 1;
      }
    }
  }
</style>