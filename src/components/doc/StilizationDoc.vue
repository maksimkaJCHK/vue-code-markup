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
          header="Some theme"
          :style="styleComp"
        >
          <books-list-body />
        </code-markup>

        <watch-css
          :is-rus="props.isRus"
          :code="codeComp"
          :cmBg="cmBg"
          :cmBorderRadius="cmBorderRadius"
          :cmTextFontSize="cmTextFontSize"
          :cmTextFontFamily="cmTextFontFamily"
          :cmTextLineHeight="cmTextLineHeight"
          :cmCountPadding="cmCountPadding"
          :cmMaxHeightBody="cmMaxHeightBody"
          :cmHeaderPadding="cmHeaderPadding"
          :cmHeaderFontSize="cmHeaderFontSize"
          :cmHeaderColor="cmHeaderColor"
          :cmMainColor="cmMainColor"
          :cmCountBg="cmCountBg"
          :cmCountColor="cmCountColor"
          :cmCountBorderRight="cmCountBorderRight"
          :cmIconColor="cmIconColor"
          :cmIconErrorColor="cmIconErrorColor"
          :cmIconIsCopyColor="cmIconIsCopyColor"
          :cmActiveBg="cmActiveBg"
          :cmActiveCountBg="cmActiveCountBg"
          :cmActiveCountColor="cmActiveCountColor"
          :cmActiveCountRightColor="cmActiveCountRightColor"
        />
      </template>
      <template #content="{ nameRow }" >
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-bg</strong> - данная CSS переменная отвечает за фон окна с кодом.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-bg</strong> - this CSS variable is responsible for the "background" of the window with the code.
          </p>

          <ui-input v-model="cmBg" />
        </div>
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-border-radius</strong> - данная CSS переменная отвечает за "border-radius" окна с кодом.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-border-radius</strong> - this CSS variable is responsible for the "border-radius" of the window with the code.
          </p>

          <ui-input v-model="cmBorderRadius" />
        </div>
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-main-color</strong> - основной цвет окна кода.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-main-color</strong> - the main color of the code window.
          </p>

          <ui-input v-model="cmMainColor" />
        </div>
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-text-font-size</strong> - размер шрифта окна с кодом.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-text-font-size</strong> - the "font-size" of the window with the code.
          </p>

          <ui-input v-model="cmTextFontSize" />
        </div>
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-text-font-family</strong> - семейство шрифта окна с кодом.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-text-font-family</strong> - the "font-family "of the window with the code.
          </p>

          <ui-input v-model="cmTextFontFamily" />
        </div>
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>--cm-text-line-height</strong> - высота шрифта окна с кодом.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-text-line-height</strong> - the "line-height" of the window with the code.
          </p>

          <ui-input v-model="cmTextLineHeight" />
        </div>
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>-cm-max-height-body</strong> - максимальная высота окна кода без шапки.
          </p>

          <p v-if="!props.isRus">
            <strong>--cm-max-height-body</strong> - "max-height" of the code window without a header
          </p>

          <ui-input v-model="cmMaxHeightBody" />
        </div>

        <watch-lines>
          <template #header>
            <template v-if="props.isRus">
              Стили заголовка окна с кодом
            </template>
            <template v-if="!props.isRus">
              Window title styles with code
            </template>
          </template>

          <template #default>
            <div :class="nameRow">
              <p v-if="props.isRus">
                <strong>--cm-header-padding</strong> - внутренние отступы для заголовка окна с кодом.
              </p>

              <p v-if="!props.isRus">
                <strong>--cm-header-padding</strong> - "padding" for the title of the window with the code.
              </p>

              <ui-input v-model="cmHeaderPadding" />
            </div>
            <div :class="nameRow">
              <p v-if="props.isRus">
                <strong>--cm-header-font-size</strong> - размер шрифта для заголовка окна с кодом.
              </p>

              <p v-if="!props.isRus">
                <strong>--cm-header-font-size</strong> - "font-size" for the title of the window with the code
              </p>

              <ui-input v-model="cmHeaderFontSize" />
            </div>
            <div :class="nameRow">
              <p v-if="props.isRus">
                <strong>--cm-header-color</strong> - цвет заголовка окна с кодом.
              </p>

              <p v-if="!props.isRus">
                <strong>--cm-header-color</strong> - the color of the window title with the code.
              </p>

              <ui-input v-model="cmHeaderColor" />
            </div>
          </template>
        </watch-lines>

        <watch-lines>
          <template #header>
            <template v-if="props.isRus">
              Стили для номеров строк
            </template>
            <template v-if="!props.isRus">
              Styles for line numbers
            </template>
          </template>

          <template #default>
            <div :class="nameRow">
              <p v-if="props.isRus">
                <strong>--cm-count-bg</strong> - фон для номеров строк.
              </p>

              <p v-if="!props.isRus">
                <strong>--cm-count-bg</strong> - "background" for line numbers.
              </p>

              <ui-input v-model="cmCountBg" />
            </div>
            <div :class="nameRow">
              <p v-if="props.isRus">
                <strong>--cm-count-color</strong> - цвет текста для номеров строк.
              </p>

              <p v-if="!props.isRus">
                <strong>--cm-count-color</strong> - text color for line numbers.
              </p>

              <ui-input v-model="cmCountColor" />
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
            <div :class="nameRow">
              <p v-if="props.isRus">
                <strong>--cm-count-border-right</strong> - цвет правого "border" для номеров строк.
              </p>

              <p v-if="!props.isRus">
                <strong>--cm-count-border-right</strong> - the color of the right "border" for line numbers.
              </p>

              <ui-input v-model="cmCountBorderRight" />
            </div>
          </template>
        </watch-lines>

        <watch-lines>
          <template #header>
            <template v-if="props.isRus">
              Стили для иконок "скопировать код"
            </template>
            <template v-if="!props.isRus">
              Styles for "copy code" icons
            </template>
          </template>

          <template #description>
            <p v-if="props.isRus">
              В этом блоке речь пойдет о стилизации иконок "скопировать код". Я реализовал 3 состояния. Это обычное состояние, состояние, когда произошла ошибка во время копирования кода в буфер обмена, и состояние когда код успешно скопирован в буфер обмена. Для всех этих состояний у меня есть 3 разные иконки. Здесь будет описано как менять цвет этих иконок. Если вы через слоты вставите свои картинки, то данный блок вам не поможет. У меня эти иконки реализованы через SVG, я просто меняю их "fill".
            </p>

            <p v-if="!props.isRus">
              In this section, we will talk about the styling of the "copy code" icons. I have implemented 3 states. This is the normal state, the state when an error occurred while copying the code to the clipboard, and the state when the code was successfully copied to the clipboard. I have 3 different icons for all these states. Here you will learn how to change the color of these icons. If you insert your pictures through the slots, then this block will not help you. I have these icons implemented via SVG, I just change them to "fill".
            </p>
          </template>

          <template #default>
            <div :class="nameRow">
              <p v-if="props.isRus">
                <strong>--cm-icon-color</strong> - цвет иконки "скопировать код".
              </p>

              <p v-if="!props.isRus">
                <strong>--cm-icon-color</strong> - icon color "copy text".
              </p>

              <ui-input v-model="cmIconColor" />
            </div>

            <div :class="nameRow">
              <p v-if="props.isRus">
                <strong>--cm-icon-error-color</strong> - цвет иконки "скопировать код", если произошла ошибка.
              </p>

              <p v-if="!props.isRus">
                <strong>--cm-icon-error-color</strong> - icon color "copy text" if an error occurred.
              </p>

              <ui-input v-model="cmIconErrorColor" />
            </div>

            <div :class="nameRow">
              <p v-if="props.isRus">
                <strong>--cm-icon-is-copy-color</strong> - цвет иконки "скопировать код", когда код успешно скопирован в буфер обмена.
              </p>

              <p v-if="!props.isRus">
                <strong>--cm-icon-is-copy-color</strong> - the color of the "copy code" icon when the code has been successfully copied to the clipboard.
              </p>

              <ui-input v-model="cmIconIsCopyColor" />
            </div>
          </template>
        </watch-lines>
        <watch-lines>
          <template #header>
            <template v-if="props.isRus">
              Стили для активной линии
            </template>
            <template v-if="!props.isRus">
              Styles for the active line
            </template>
          </template>

          <template #default>
            <div :class="nameRow">
              <p v-if="props.isRus">
                <strong>--cm-active-bg</strong> - фон активной строки.
              </p>

              <p v-if="!props.isRus">
                <strong>--cm-active-bg</strong> - "background" of the active line.
              </p>

              <ui-input v-model="cmActiveBg" />
            </div>
            <div :class="nameRow">
              <p v-if="props.isRus">
                <strong>--cm-active-count-bg</strong> - фон для номера строки активной строки.
              </p>

              <p v-if="!props.isRus">
                <strong>--cm-active-count-bg</strong> - "background" for the line number of the active line.
              </p>

              <ui-input v-model="cmActiveCountBg" />
            </div>
            <div :class="nameRow">
              <p v-if="props.isRus">
                <strong>--cm-active-count-color</strong> - цвет для номера строки активной строки.
              </p>

              <p v-if="!props.isRus">
                <strong>--cm-active-count-color</strong> - the color for the line number of the active line.
              </p>

              <ui-input v-model="cmActiveCountColor" />
            </div>
            <div :class="nameRow">
              <p v-if="props.isRus">
                <strong>--cm-active-count-right-color</strong> - цвет правого "border" активной строки.
              </p>

              <p v-if="!props.isRus">
                <strong>--cm-active-count-right-color</strong> - the color of the right "border" of the active row.
              </p>

              <ui-input v-model="cmActiveCountRightColor" />
            </div>
          </template>
        </watch-lines>
      </template>
    </settings-doc>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  import useLang from '@/components/code-examples/uselang.js';

  import SettingsDoc from '@/components/SettingsDoc.vue';
  import BooksListBody from '@/components/code-examples/books/BooksListBody.vue';
  import WatchCss from '@/components/watch-css/WatchCss.vue';
  import WatchLines from '@/components/WatchLines.vue';

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

  const isHeader = ref(false);

  const cmBg = ref('#212122');
  const cmBorderRadius = ref('5px');
  const cmTextFontSize = ref("1em");
  const cmTextFontFamily = ref("inherit");
  const cmTextLineHeight = ref("1.5em");
  const cmCountPadding = ref("0 .35em");
  const cmMaxHeightBody = ref('auto');
  const cmHeaderPadding = ref('.5em 1em');
  const cmHeaderFontSize = ref('1em');
  const cmHeaderColor = ref('#ffc661');
  const cmMainColor = ref('#a9b7c6');
  const cmCountBg = ref('#5e5d5d');
  const cmCountColor = ref('#fff');
  const cmCountBorderRight = ref('#5e5d5d');
  const cmIconColor = ref('#fff');
  const cmIconErrorColor = ref('#980505');
  const cmIconIsCopyColor = ref('#60a802');
  const cmActiveBg = ref('#2a2a2b');
  const cmActiveCountBg = ref('#454545');
  const cmActiveCountColor = ref('#5e5d5d');
  const cmActiveCountRightColor = ref('#454545');

  const styleComp = computed(() => ({
    '--cm-bg': cmBg.value,
    '--cm-border-radius': cmBorderRadius.value,
    '--cm-main-color': cmMainColor.value,
    '--cm-text-font-size': cmTextFontSize.value,
    '--cm-text-font-family': cmTextFontFamily.value,
    '--cm-text-line-height': cmTextLineHeight.value,
    '--cm-count-padding': cmCountPadding.value,
    '--cm-max-height-body': cmMaxHeightBody.value,
    '--cm-header-padding': cmHeaderPadding.value,
    '--cm-header-font-size': cmHeaderFontSize.value,
    '--cm-header-color': cmHeaderColor.value,
    '--cm-count-bg': cmCountBg.value,
    '--cm-count-color': cmCountColor.value,
    '--cm-count-border-right': cmCountBorderRight.value,
    '--cm-icon-color': cmIconColor.value,
    '--cm-icon-error-color': cmIconErrorColor.value,
    '--cm-icon-is-copy-color': cmIconIsCopyColor.value,
    '--cm-active-bg': cmActiveBg.value,
    '--cm-active-count-bg': cmActiveCountBg.value,
    '--cm-active-count-color': cmActiveCountColor.value,
    '--cm-active-count-right-color': cmActiveCountRightColor.value,
  }));

  const codeComp = computed(() => `.code-markup_theme-some-theme {
  --cm-bg: ${cmBg.value};
  --cm-border-radius: ${cmBorderRadius.value};
  --cm-main-color: ${cmMainColor.value};
  --cm-text-font-size: ${cmTextFontSize.value};
  --cm-text-font-family: ${cmTextFontFamily.value};
  --cm-text-line-height: ${cmTextLineHeight.value};
  --cm-max-height-body: ${cmMaxHeightBody.value};
  --cm-header-padding: ${cmHeaderPadding.value};
  --cm-header-font-size: ${cmHeaderFontSize.value};
  --cm-header-color: ${cmHeaderColor.value};
  --cm-count-bg: ${cmCountBg.value};
  --cm-count-color: ${cmCountColor.value};
  --cm-count-padding: ${cmCountPadding.value};
  --cm-count-border-right: ${cmCountBorderRight.value};
  --cm-icon-color: ${cmIconColor.value};
  --cm-icon-error-color: ${cmIconErrorColor.value};
  --cm-icon-is-copy-color: ${cmIconIsCopyColor.value};
  --cm-active-bg': ${cmActiveBg.value};
  --cm-active-count-bg: ${cmActiveCountBg.value};
  --cm-active-count-color: ${cmActiveCountColor.value};
  --cm-active-count-right-color: ${cmActiveCountRightColor.value};
}`);
</script>

<style lang="scss" scoped></style>