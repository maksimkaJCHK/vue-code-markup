<template>
  <div class="mu-comp-doc">
    <template v-if="props.isRus">
      <h2>
        Компоненты для разметки документа
      </h2>

      <p>
        Если сравнивать с HTML, то эти компоненты можно назвать тегами из которых состоит документ. Все эти компоненты имеют следующие входные параметры:
      </p>

      <ul>
        <li>
          <strong>code</strong> - входной параметр в который передаётся текст для отображения элементов кода. Если вам нужно добавить в код картинки, то можно обойтись без данного входного параметра. Просто оберните нужный кусок кода этими компонентами, данные компоненты имеют нужные слоты. Если же такой необходимости у вас не возникает, то я бы посоветовал вам всё таки пользоваться данным входным параметром. Если он задан, то выведется содержимое входного параметра "code".
        </li>
        <li>
          <strong>lineThrough</strong> - данный входной параметр делает элемент код зачеркнутым. По сути данный входной параметр есть так-же у компонента "code-line", и делает он тоже самое.
        </li>
        <li>
          <strong>bold</strong> - данный входной параметр делает элемент кода жирным. По сути данный входной параметр есть так-же у компонента "code-line", и делает он тоже самое.
        </li>
        <li>
          <strong>nonBold</strong> - данный входной параметр делает текст обычным, не жирным. Даже если для компонента родителя "code-line" задан входной параметр "bold", или для компонента "code-markup" задан входной параметр "textBold", текст всё равно будет обычным. По сути данный входной параметр есть так-же у компонента "code-line", и делает он тоже самое.
        </li>
        <li>
          <strong>inactive</strong> - данный входной параметр делает текст кода не много прозрачным. Это хорошее средство привлечь внимание к определённым участкам кода.
        </li>
      </ul>

      <p>
        Ниже я приведу пример, чтобы было понятнее. Поскольку часть входных параметров такие же как и для компонента "code-line", да и их не много, пример будет не интерактивным. Во второй строке я сделал "old-class" зачёркнутым, а "new-class" и "div" я сделал жирными. В пятой строчке я сделал у всей строки жирный текст, но для "old-class" я оставил текст обычным. 
      </p>

      <comp-for-markup lang="ru" />

      <p>
        Условно все компоненты для разметки документа можно разделить на общие компоненты, компоненты в блоке шаблона, компоненты в блоке скриптов, компоненты в блоке стилей.
      </p>
    </template>

    <template v-if="!props.isRus">
      <h2>
        Components for document markup
      </h2>

      <p>
        When compared with HTML, these components can be called the tags that make up the document. All these components have the following input parameters:
      </p>

      <ul>
        <li>
          <strong>code</strong> is the input parameter to which the text is passed to display the code elements. If you need to add images to the code, you can do without this input parameter. Just wrap the right piece of code with these components, these components have the right slots. If you do not have such a need, then I would advise you to use this input parameter anyway. If it is set, the contents of the input parameter "code" will be output.
        </li>
        <li>
          <strong>lineThrough</strong> - this input parameter makes the code element strikethrough. In fact, the "code-line" component also has this input parameter, and it does the same thing.
        </li>
        <li>
          <strong>bold</strong> - this input parameter makes the code element bold. In fact, the "code-line" component also has this input parameter, and it does the same thing.
        </li>
        <li>
          <strong>nonBold</strong> - this input parameter makes the text plain, not bold. Even if the "bold" input parameter is set for the "code-line" parent component, or the "textBold" input parameter is set for the "code-markup" component, the text will still be normal. In fact, the "code-line" component also has this input parameter, and it does the same thing.
        </li>
        <li>
          <strong>inactive</strong> - this input parameter does not make the code text very transparent. This is a good way to draw attention to certain parts of the code.
        </li>
      </ul>

      <p>
        I'll give an example below to make it clearer. Since some of the input parameters are the same as for the "code-line" component, and there are not many of them, the example will not be interactive. In the second line, I made "old-class" crossed out, and I made "new-class" and "div" bold. In the fifth line, I made bold text for the entire line, but for the "old-class" I left the text as usual.
      </p>

      <comp-for-markup />

      <p>
        Conventionally, all components for marking up a document can be divided into common components, components in the template block, components in the script block, and components in the styles block.
      </p>
    </template>
  </div>
</template>

<script setup>
  import CompForMarkup from '@/components/code-examples/doc/CompForMarkup.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });
</script>

<style lang="scss" scoped>

</style>