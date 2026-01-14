<template>
  <div class="example-doc">
    <template v-if="props.isRus">
      <h2>Примеры</h2>

      <p>
        Я думаю, что нужно более подробно показать, что можно сделать при помощи моего плагина. Ниже я покажу примеры использования и ссылки на примеры.
      </p>

      <p>
        Пример <a href="https://github.com/maksimkaJCHK/vue-code-markup/blob/main/src/components/code-examples/tab/TabBooksList.vue" target="_blank">создания табов</a>.
      </p>

      <tab-books-list lang="ru" />

      <p>Выше я писал про входной параметр "lineCount", если это возможно, я бы вам советовал задавать максимальную высоту через этот входной параметр. Однако это не всегда возможно. Я допускаю ситуацию, при которой у вас по дизайну задана какая-то конкретная максимальная высота. Для этого оберните мой плагин каким-нибуль блочным элементом (div, aside, section и тд) и задайте в стилях следующую CSS переменную "--cm-max-height-body". В <a href="https://github.com/maksimkaJCHK/vue-code-markup/blob/main/src/components/code-examples/books/BooksStyleHeight.vue" target="_blank">примере ниже</a> я задал максимальную высоту в "200px".</p>

      <books-style-height lang="ru" />

      <p>После того, когда я создам пару тем, я более подробно опишу переменные которые я использую для стилизации. Пока смысла в этом я не вижу.</p>
    </template>

    <template v-if="!props.isRus">
      <h2>Examples</h2>

      <p>
        I think we need to show in more detail what can be done using my plugin. Below I will show usage examples and links to examples.
      </p>

      <p>
        Example <a href="https://github.com/maksimkaJCHK/vue-code-markup/blob/main/src/components/code-examples/tab/TabBooksList.vue" target="_blank">creating tabs</a>.
      </p>

      <tab-books-list />

      <p>Above, I wrote about the "lineCount" input parameter, if possible, I would advise you to set the maximum height through this input parameter. However, this is not always possible. I assume a situation in which you have a specific maximum height set by design. To do this, wrap my plugin with some kind of block element (div, aside, section, etc.) and set the following CSS variable "--cm-max-height-body" in the styles. In <a href="https://github.com/maksimkaJCHK/vue-code-markup/blob/main/src/components/code-examples/books/BooksStyleHeight.vue" target="_blank">the example below</a> I set the maximum height to "200px".</p>

      <books-style-height />

      <p>After I create a couple of themes, I will describe in more detail the variables that I use for styling. I don't see the point in it yet.</p>
    </template>
  </div>
</template>

<script setup>
  import BooksStyleHeight from '@/components/code-examples/books/BooksStyleHeight.vue';
  import TabBooksList from '@/components/code-examples/tab/TabBooksList.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });

</script>

<style lang="scss">

</style>