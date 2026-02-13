<template>
  <watch-lines>
    <template #header>
      <template v-if="props.isRus">
        Стилизация компонентов блока "style"
      </template>

      <template v-if="!props.isRus">
        Stylization of the "style" block components
      </template>
    </template>

    <template #description>
      <p v-if="props.isRus">
        Данный раздел посвящён стилизации компонентов, которые используются в блоке "style". Это наверное самый большой раздел. В большинстве тем, нет особой разницы между "id" элемента и его классом, если для вас важно различать класс и "id", то в этом разделе будет описано, как задать для данных элементов разные цвета. Все CSS переменные в этом разделе содержат префикс "style", чтобы их можно было отличить от других компонентов.
      </p>

      <p v-if="!props.isRus">
        This section is devoted to the styling of the components that are used in the "style" block. This is probably the largest section. In most themes, there is no particular difference between the "id" of an element and its class. If it is important for you to distinguish between class and "id", then this section will describe how to set different colors for these elements. All CSS variables in this section contain the prefix "style" so that they can be distinguished from other components.
      </p>
    </template>

    <template #default>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-style-class</strong> - данная CSS переменная отвечает за цвет класса. Это значение будет применено к компоненту "mu-style-class".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-style-class</strong> - this CSS variable is responsible for the color of the class. This value will be applied to the "mu-style-class" component.
        </p>

        <ui-input v-model="cmStyleClass" />
      </div>

      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-style-id</strong> - данная CSS переменная отвечает за цвет id. Это значение будет применено к компоненту "mu-style-id".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-style-id</strong> - this CSS variable is responsible for the color of the id. This value will be applied to the "mu-style-id" component.
        </p>

        <ui-input v-model="cmStyleId" />
      </div>

      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-style-tag</strong> - данная CSS переменная отвечает за цвет тегов. Это значение будет применено к компоненту "mu-tag".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-style-tag</strong> - this CSS variable is responsible for the color of the tags. This value will be applied to the "mu-tag" component.
        </p>

        <ui-input v-model="cmStyleTag" />
      </div>

      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-style-key</strong> - данная CSS переменная отвечает за цвет тегов. Это значение будет применено к компоненту "mu-tag".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-style-key</strong> - this CSS variable is responsible for the color of the tags. This value will be applied to the "mu-tag" component.
        </p>

        <ui-input v-model="cmStyleKey" />
      </div>

      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-style-param</strong> - данная CSS переменная отвечает за цвет тегов. Это значение будет применено к компоненту "mu-tag".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-style-param</strong> - this CSS variable is responsible for the color of the tags. This value will be applied to the "mu-tag" component.
        </p>

        <ui-input v-model="cmStyleParam" />
      </div>

      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-style-unit-mes</strong> - данная CSS переменная отвечает за цвет тегов. Это значение будет применено к компоненту "mu-tag".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-style-unit-mes</strong> - this CSS variable is responsible for the color of the tags. This value will be applied to the "mu-tag" component.
        </p>

        <ui-input v-model="cmStyleUnitMes" />
      </div>

      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-style-ampersand</strong> - данная CSS переменная отвечает за цвет тегов. Это значение будет применено к компоненту "mu-tag".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-style-ampersand</strong> - this CSS variable is responsible for the color of the tags. This value will be applied to the "mu-tag" component.
        </p>

        <ui-input v-model="cmStyleAmpersand" />
      </div>

      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-style-curly-brace</strong> - данная CSS переменная отвечает за цвет тегов. Это значение будет применено к компоненту "mu-tag".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-style-curly-brace</strong> - this CSS variable is responsible for the color of the tags. This value will be applied to the "mu-tag" component.
        </p>

        <ui-input v-model="cmStyleCurlyBrace" />
      </div>
    </template>
  </watch-lines>
</template>

<script setup>
  import WatchLines from '@/components/WatchLines.vue';
  import UiInput from '@/UI/UIInput.vue';

  const props = defineProps(['isRus', 'nameRow']);

  const cmStyleClass = defineModel('cm-style-class');
  const cmStyleId = defineModel('cm-style-id');
  const cmStyleTag = defineModel('cm-style-tag');
  const cmStyleKey = defineModel('cm-style-key');
  const cmStyleParam = defineModel('cm-style-param');
  const cmStyleUnitMes = defineModel('cm-style-unit-mes');
  const cmStyleAmpersand = defineModel('cm-style-ampersand');
  const cmStyleCurlyBrace = defineModel('cm-style-curly-brace');
</script>