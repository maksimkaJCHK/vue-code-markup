<template>
  <div class="code-markup-doc">
    <template v-if="props.isRus">
      <h3>
        Стилизация компонентов
      </h3>

     <p>
      Данный раздел тесно связан с входным параметром "theme" для компонета "code-markup". На данный момент времени я сделал 2 темы: "darcula" и "monokai".
    </p>
    </template>

    <template v-if="!props.isRus">
      <h3>
        Stylization of components
      </h3>

      
    </template>

    <settings-doc>
      <template #code>
        <code-markup>
          <books-list-body />
        </code-markup>
      </template>
      <template #content="{ nameRow }" >
        <div :class="nameRow">
          <p v-if="props.isRus">
            
          </p>

          <p v-if="!props.isRus">

          </p>
        </div>
      </template>
    </settings-doc>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue';

  import useLang from '@/components/code-examples/uselang.js';

  import SettingsDoc from '@/components/SettingsDoc.vue';
  import BooksListBody from '@/components/code-examples/books/BooksListBody.vue';

  import UiInput from '@/UI/UIInput.vue';
  import UiCheckbox from '@/UI/UICheckbox.vue';
  import UiSelect from '@/UI/UISelect.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });

  const { codeParam } = useLang({
    lang: props.isRus ? 'ru' : 'en'
  });

  const textTitle = 'Copy code to clipboard';
  const textSuccessful = 'The code is copied to the clipboard';
  const textError= 'An error occurred while copying the code to the clipboard';

  const title = ref(textTitle);
  const successfulText = ref(textSuccessful);
  const errorText = ref(textError);

  watch(codeParam, (val) => {
    title.value = val.title || textTitle;
    successfulText.value = val.successfulText || textSuccessful;
    errorText.value = val.errorText || textError;
  },
  { immediate: true });
</script>

<style lang="scss" scoped></style>