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
          <strong>code</strong> - входной параметр в который передаётся текст для отображения элементов кода. Для удобства можно обойтись без данного параметры если обернуть текст этими компонентами, но я бы посоветовал вам всё таки пользоваться данным входным параметром. Если он задан, то выведится содержимое входного параметра "code".
        </li>
        <li>
          <strong>lineThrough</strong> - данный входной параметр делает код зачеркнутым. 
        </li>
      </ul>

      <p>
        Ниже я приведу пример, чтобы было понятнее. Во второй строке я сделал "old-class" зачёркнутым.
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
          <strong>code</strong> is the input parameter to which the text is passed to display the code elements. For convenience, you can do without these parameters if you wrap the text with these components, but I would advise you to still use this input parameter. If it is set, the contents of the input parameter "code" will be output.
        </li>
        <li>
          <strong>lineThrough</strong> - this input parameter makes the code strikethrough. 
        </li>
      </ul>

      <p>
        I will give an example below to make it clearer. I've strikethroughed "old-class" in the second line.
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