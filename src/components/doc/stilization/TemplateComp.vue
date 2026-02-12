<template>
  <watch-lines>
    <template #header>
      <template v-if="props.isRus">
        Стилизация компонентов шаблонов
      </template>

      <template v-if="!props.isRus">
        Styling template components
      </template>
    </template>

    <template #description>
      <p v-if="props.isRus">
        Данный раздел посвящён стилизации компонентов, которые используются в блоке шаблонов. Таких компонентов всего два - это "mu-tag" и "mu-attr". Соответственно это теги, и их атрибуты.
      </p>

      <p v-if="!props.isRus">
        This section is devoted to the styling of components that are used in the template block. There are only two such components - these are "mu-tag" and "mu-attr". Accordingly, these are tags and their attributes.
      </p>
    </template>

    <template #default>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-tag-color</strong> - данная CSS переменная отвечает за цвет тегов. Это значение будет применено к компоненту "mu-tag".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-tag-color</strong> - this CSS variable is responsible for the color of the tags. This value will be applied to the "mu-tag" component.
        </p>

        <ui-input v-model="cmTagColor" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-attr-color</strong> - данная CSS переменная отвечает за цвет атрибута тегов. Это значение будет применено к компоненту "mu-attr".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-attr-color</strong> - this CSS variable is responsible for the color of the tag attribute. This value will be applied to the "mu-attr" component.
        </p>

        <ui-input v-model="cmAttrColor" />
      </div>
    </template>
  </watch-lines>
</template>

<script setup>
  import WatchLines from '@/components/WatchLines.vue';
  import UiInput from '@/UI/UIInput.vue';

  const props = defineProps(['isRus', 'nameRow']);

  const cmTagColor = defineModel('cm-tag-color');
  const cmAttrColor = defineModel('cm-attr-color');
</script>