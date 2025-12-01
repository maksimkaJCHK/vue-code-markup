<template>
  <div class="mu-comp-doc">
    <template v-if="props.isRus">
      <h2>
        Компоненты для разметки документа
      </h2>

      <p>
        Если сравнивать с HTML, то эти компоненты можно назвать тегами из которых состоит документ. Все эти компоненты имеют один входной параметр, он называется "code", для удобства ими можно обернуть текст кода, но я бы посоветовал всё таки пользоваться входным параметром. Если он задан, то выведится содержимое входного параметра "code".
      </p>

      <p>
        Условно все компоненты для разметки документа можно разделить на общие компоненты, компоненты в блоке шаблона, компоненты в блоке скриптов, компоненты в блоке стилей.
      </p>
    </template>

    <template v-if="!props.isRus">
      <h2>
        Components for document markup
      </h2>

      <p>
        When compared with HTML, these components can be called the tags that make up the document. All these components have one input parameter, it is called "code", for convenience, they can wrap the text of the code, but I would advise you to use the input parameter anyway. If it is set, the contents of the input parameter "code" will be output.
      </p>

      <p>
        Conventionally, all components for marking up a document can be divided into common components, components in the template block, components in the script block, and components in the styles block.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });
</script>

<style lang="scss" scoped>

</style>