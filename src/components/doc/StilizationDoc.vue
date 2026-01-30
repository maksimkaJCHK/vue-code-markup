<template>
  <div class="code-markup-doc">
    <template v-if="props.isRus">
      <h3>
        Стилизация компонентов
      </h3>

     <p>
      Данный раздел будет посвящён тому, как создавать свои темы, или стилизовывать существующие темы под свой проект. Данный раздел тесно связан с входным параметром "theme" для компонента "code-markup". На данный момент времени я сделал 2 темы: "darcula" и "monokai". За основу я взял тему "darcula", потому что она мне больше всего нравится. Для того, чтобы создать свою тему, нужно добавить во входной параметр "theme" название своей темы. Если вы зададите название темы - "some-theme", то в таком случае CSS класс для стилизации будет выглядеть следующим образом "code-markup_theme-some-theme".
    </p>
    </template>

    <template v-if="!props.isRus">
      <h3>
        Stylization of components
      </h3>

      <p>
        В этом разделе мы расскажем о том, как создавать свои собственные темы или стилизовать существующие темы в соответствии с вашим проектом. Этот раздел тесно связан с входным параметром "тема" для компонента "разметка кода". На данный момент я создал 2 темы: "даркула" и "монокай". Я взял тему "даркула" за основу, потому что она мне нравится больше всего. Для того чтобы создать свою собственную тему, вам необходимо добавить название вашей темы во входной параметр "theme". Если вы зададите для названия темы значение "some-theme", то класс стилизации CSS будет выглядеть следующим образом: "code-markup_theme-some-theme".
      </p>
    </template>

    <settings-doc>
      <template #code>
        <code-markup
          v-bind="codeParam"
          :style="styleComp"
        >
          <books-list-body />
        </code-markup>
      </template>
      <template #content="{ nameRow }" >
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-bg</strong> - данная CSS переменная отвечает за фон редактора с кодом.
          </p>

          <p v-if="!props.isRus">

          </p>
        </div>
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-border-radius</strong> - данная CSS переменная отвечает за "border-radius" редактора с кодом.
          </p>

          <p v-if="!props.isRus">

          </p>
        </div>
      </template>
    </settings-doc>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

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

  const cmBg = ref('#212122');
  const cmBorderRadius = ref('5px');

  const styleComp = computed(() => ({
    '--cm-bg': cmBg.value,
    '--cm-border-radius': cmBorderRadius.value
  }));
</script>

<style lang="scss" scoped></style>