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
        This section will focus on how to create your own themes, or style existing themes to fit your project. This section is closely related to the "theme" input parameter for the "code-markup" component. At this point in time, I have made 2 themes: "darcula" and "monokai". I took the theme "darcula" as a basis, because I like it the most. In order to create your own theme, you need to add the name of your theme to the input parameter "theme". If you set the theme name to "some-theme", then the CSS styling class will look like this: "code-markup_theme-some-theme".
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

        <watch-css
          :is-rus="props.isRus"
          :code="styleComp"
          :cmBg="cmBg"
          :cmBorderRadius="cmBorderRadius"
          :cmTextFontSize="cmTextFontSize"
          :cmTextFontFamily="cmTextFontFamily"
          :cmTextLineHeight="cmTextLineHeight"
          :cmCountPadding="cmCountPadding"
          :cmMaxHeightBody="cmMaxHeightBody"
        />
      </template>
      <template #content="{ nameRow }" >
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-bg</strong> - данная CSS переменная отвечает за фон редактора с кодом.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-bg</strong> - this CSS variable is responsible for the "background" of the editor with the code.
          </p>

          <ui-input v-model="cmBg" />
        </div>
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-border-radius</strong> - данная CSS переменная отвечает за "border-radius" редактора с кодом.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-border-radius</strong> - this CSS variable is responsible for the "border-radius" of the editor with the code.
          </p>

          <ui-input v-model="cmBorderRadius" />
        </div>
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-text-font-size</strong> - размер шрифта редактора с кодом.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-text-font-size</strong> - the font size of the editor with the code.
          </p>

          <ui-input v-model="cmTextFontSize" />
        </div>
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-text-font-family</strong> - семейство шрифта редактора кода.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-text-font-family</strong> - the font family of the code editor.
          </p>

          <ui-input v-model="cmTextFontFamily" />
        </div>
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-text-line-height</strong> - высота шрифта редактора кода.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-text-line-height</strong> - the font height of the code editor.
          </p>

          <ui-input v-model="cmTextLineHeight" />
        </div>
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-count-padding</strong> - внутренние отступы для номеров строк.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-count-padding</strong> - "padding" for line numbers.
          </p>

          <ui-input v-model="cmCountPadding" />
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
  import WatchCss from '@/components/WatchCss.vue';

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
  const cmTextFontSize = ref("1em");
  const cmTextFontFamily = ref("inherit");
  const cmTextLineHeight = ref("1.5em");
  const cmCountPadding = ref("0 .35em");
  const cmMaxHeightBody = ref('auto');

  const styleComp = computed(() => ({
    '--cm-bg': cmBg.value,
    '--cm-border-radius': cmBorderRadius.value,
    '--cm-text-font-size': cmTextFontSize.value,
    '--cm-text-font-family': cmTextFontFamily.value,
    '--cm-text-line-height': cmTextLineHeight.value,
    '--cm-count-padding': cmCountPadding.value,
    '--cm-max-height-body': cmMaxHeightBody.value
  }));
</script>

<style lang="scss" scoped></style>