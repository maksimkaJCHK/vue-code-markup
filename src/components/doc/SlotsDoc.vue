<template>
  <div class="slots-doc">
    <template v-if="props.isRus">
      <h2>Слоты</h2>

      <p>
        Для данного раздела стоит начать сразу с примера, так будет понятнее:
      </p>

      <slots-example lang="ru" />

      <p>
        Я думаю, пример выше отлично показывает как пользоваться слотами, но всё же ниже я их опишу.
      </p>

      <ul>
        <li>
          <strong>default</strong> - это слот по умолчанию. Если вам не нужны другие слоты, то это будет слот когда вы оборачиваете что-то компонентом "code-markup".
        </li>
        <li>
          <strong>header</strong> - это слот для заголовка окна с кодом. Для его отображения входной параметр "isHeader" должен быть установлен в "true". Если задан входной параметр "header", то будет выведен он, а не содержимое слота. Как правило данный слот нужен для того, чтобы вставить на место заголовка окна с кодом текст с иконкой, какое-то HTML содержимое, какой-нибудь компонент VUE.js, привязать к заголовку какую-нибудь логику. На данной странице, я через данный слот делаю tab-ы.
        </li>
      </ul>

      <p>
        Ниже находятся слоты для иконок "скопировать текст", "текст удачно скопирован" и иконка когда произошла ошибка во время копирования текста в буфер обмена.
      </p>

      <ul>
        <li>
          <strong>copy</strong> - данный слот нужен для того, чтобы заменить иконку "скопировать текст". В него можно вставить картинку, или svg-ку. Картинка или svg-ка займет всю ширину, высоту я не трогаю. Лучше сюда вставить квадратную иконку. Место для этого слота будет иметь ширину и высоту "1em".
        </li>
        <li>
          <strong>success</strong> - данный слот нужен для того, чтобы заменить иконку когда текст успешно скопирован в буфер обмена. В него так-же можно вставить картинку, или svg-ку. Картинка или svg-ка займет всю ширину, высоту я не трогаю. Лучше сюда вставить квадратную иконку. Место для этого слота будет иметь ширину и высоту "1em".
        </li>
        <li>
          <strong>error</strong> - данный слот нужен для того, чтобы заменить иконку когда произошла ошибка во время копирования текста в буфер обмена. В него так-же можно вставить картинку, или svg-ку. Картинка или svg-ка займет всю ширину, высоту я не трогаю. Лучше сюда вставить квадратную иконку. Место для этого слота будет иметь ширину и высоту "1em".
        </li>
      </ul>
    </template>

    <template v-if="!props.isRus">
      <h2>Slots</h2>

      <p>
        For this section, it's worth starting with an example right away, so it will be clearer:
      </p>

      <slots-example />

      <p>
        I think the example above perfectly shows how to use the slots, but still I will describe them below.
      </p>

      <ul>
        <li>
          <strong>default</strong> is the default slot. If you don't need other slots, then this will be the slot when you wrap something with the "code-markup" component.
        </li>
        <li>
          <strong>header</strong> is a slot for the title of the window with the code. To display it, the input parameter "isHeader" must be set to "true". If the input parameter "header" is set, it will be output, not the contents of the slot. As a rule, this slot is needed in order to insert text with an icon, some HTML content, or some VUE component in place of the title of the window with the code.js, attach some logic to the header. On this page, I make tabs through this slot.
        </li>
      </ul>

      <p>
        Below there are slots for the icons "copy text", "text successfully copied" and the icon when an error occurred while copying text to the clipboard.
      </p>

      <ul>
        <li>
          <strong>copy</strong> - this slot is needed to replace the "copy text" icon. You can insert an image or an svg into it. The image or svg will take up the entire width, I'm not touching the height. It is better to insert a square icon here. The space for this slot will have a width and height of "1em".
        </li>
        <li>
          <strong>success</strong> - this slot is needed to replace the icon when the text has been successfully copied to the clipboard. You can also insert an image or an svg into it. The image or svg will take up the entire width, I'm not touching the height. It is better to insert a square icon here. The space for this slot will have a width and height of "1em".
        </li>
        <li>
          <strong>error</strong> - this slot is needed to replace the icon when an error occurred while copying text to the clipboard. You can also insert an image or an svg into it. The image or svg will take up the entire width, I'm not touching the height. It is better to insert a square icon here. The space for this slot will have a width and height of "1em".
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup>
  import SlotsExample from '@/components/code-examples/doc/SlotsExample.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });

</script>

<style lang="scss">

</style>